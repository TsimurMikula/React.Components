import classes from './DetailsCard.module.css';
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../../models";
import getProductId from '../../../modules/getProductId';
import Loader from '../Loader/Loader';
import ErrorMessage from '../../ErrorMessage';
import { AxiosError } from 'axios';
import MyBtn from '../Button/MyBtn/MyBtn';
import DetailsProduct from '../MainPage/Product/DetailsProduct/DetailsProduct';


const DetailsCard = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setSidebarState =
    useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();
  const closeDetailsCard = () => {
    navigate(-1);
    setSidebarState(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id])

  const fetchProduct = async () => {
    try {
      if (id) {
        setError('');
        setLoading(true);
        const product = await getProductId(id);
        setProductId([product]);
        setLoading(false);
        setSidebarState(true);
      }
      
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <>
      <div className={classes.sidebar} onClick={(e) => e.stopPropagation()}>
        <div className={classes.product}>
          {!productId || loading ? (
            <Loader />
          ) : (
            productId.map((product) => (
              <>
                <DetailsProduct product={product} key={product.id} />
                <MyBtn onClick={closeDetailsCard}>Close</MyBtn>
              </>
            ))
          )}
          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
