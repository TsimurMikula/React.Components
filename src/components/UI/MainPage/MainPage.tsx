import { useState } from 'react';
import Product from './Product/Product';
import Loader from '../Loader/Loader';
import ErrorMessage from '../../ErrorMessage';
import classes from './MainPage.module.css';
import useProducts from '../../../hooks/useProducts';
import { getSkipProducts } from '../../../modules/getSkipProducts';
import Pagination from './Pagination/Pagination';
import { Outlet, useNavigate } from 'react-router-dom';
import Search from './Search/Search';
import ChangeLimit from '../ChangeLimit/ChangeLimit';


const MainPage = () => {
  const [searchProduct, setSearchProduct] = useState(
    localStorage.getItem('title') || ''
  );
  const [limit, setLimit] = useState(localStorage.getItem('limit') || '5');
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const {
    products,
    loading,
    error,
    page,
    setPage,
    setSkip,
    totalPages,
  } = useProducts(searchProduct, limit);

  const getSearchProduct = (product: string) => setSearchProduct(product);
  
  const getChangeLimit = (changeLimit: string) => {
    setLimit(changeLimit);
    localStorage.setItem('limit', changeLimit);
  }
  const pagination = (p: number) => {
    setPage(p);
    setSkip(getSkipProducts(p, limit));
  };

  const isOpenSidebar = () => {
    if (sidebarState) {
      setSidebarState(false);
      navigate(-1);
    }
  }

  return (
    <div className={sidebarState ? classes.mainWithSidebar : classes.main} onClick={isOpenSidebar}>
      <Search getSearchProduct={getSearchProduct} />
      <ChangeLimit getChangeLimit={getChangeLimit} />
      <Pagination
        loading={loading}
        totalPages={totalPages}
        page={page}
        pagination={pagination}
      />
      <div className={classes.mainProducts}>
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
        <Outlet context={setSidebarState} />
        {error && <ErrorMessage error={error} />}
      </div>
    </div>
  );
};

export default MainPage;
