import { useState } from 'react';
import InputTitle from '../../Input/InputTitle/InputTitle';
import MyBtn from '../../Button/MyBtn/MyBtn';
import { IGetSearchProduct } from '../../../../models';

const Search = ({ getSearchProduct }: IGetSearchProduct) => {
  const [productName, setProductName] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  getSearchProduct(searchProduct);

  const setProduct = (pName: string) => setProductName(pName);
  const getProduct = () => {
    setSearchProduct(productName.trim());
  };

  return (
    <div>
      <InputTitle setProduct={setProduct} />
      <MyBtn onClick={getProduct}>Search</MyBtn>
    </div>
  );
};

export default Search;
