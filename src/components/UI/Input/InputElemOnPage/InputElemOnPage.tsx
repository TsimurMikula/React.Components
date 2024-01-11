import { useState } from 'react';
import classes from './InputElemOnPage.module.css';
import { IGetElemOnPage } from '../../../../models';

const InputElemOnPage = ({ getElemOnPage }: IGetElemOnPage) => {
  const [countElem, setCountElem] = useState(
    localStorage.getItem('limit') || '5'
  );
  getElemOnPage(countElem);

  return (
    <input
      value={countElem}
      onChange={(e) => setCountElem(e.target.value)}
      className={classes.inputTitle}
      type="text"
      placeholder="Enter the number of items"
    />
  );
};

export default InputElemOnPage;
