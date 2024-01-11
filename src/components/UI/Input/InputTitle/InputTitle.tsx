import { useState } from 'react';
import classes from './InputTitle.module.css';
import { ISetProduct } from '../../../../models';

const InputTitle = ({ setProduct }: ISetProduct) => {
  const [productName, setProductName] = useState(
    localStorage.getItem('title') || ''
  );
  setProduct(productName);

  return (
    <input
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      className={classes.inputTitle}
      type="text"
      placeholder="Enter a name..."
    />
  );
};

export default InputTitle;
