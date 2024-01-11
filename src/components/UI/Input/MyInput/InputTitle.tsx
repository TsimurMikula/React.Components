import { useState } from 'react';
import classes from './InputTitle.module.css';
import { ISetProduct } from '../../../../models';

const MyInput = ({ setProduct }: ISetProduct) => {
  const [productName, setProductName] = useState(
    localStorage.getItem('state') || ''
  );
  setProduct(productName);

  return (
    <input
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      className={classes.myInput}
      type="text"
      placeholder="Enter a name..."
    />
  );
};

export default MyInput;
