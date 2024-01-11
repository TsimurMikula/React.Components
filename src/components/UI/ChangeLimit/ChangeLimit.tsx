import { useState } from 'react';
import classes from './ChangeLimit.module.css'
import InputElemOnPage from '../Input/InputElemOnPage/InputElemOnPage';
import MyBtn from '../Button/MyBtn/MyBtn';
import { IGetChangeLimit } from '../../../models';

const ChangeLimit = ({ getChangeLimit }: IGetChangeLimit) => {
  const [countElem, setCountElem] = useState('');
  const [limit, setLimit] = useState(
    localStorage.getItem('limit') || '5'
  );
  getChangeLimit(limit);

  const getElemOnPage = (countElem: string) => setCountElem(countElem);
  const setElemOnPage = () => setLimit(countElem);

  return (
    <div className={classes.countElem}>
      <InputElemOnPage getElemOnPage={getElemOnPage} />
      <MyBtn onClick={setElemOnPage}>Apply</MyBtn>
    </div>
  );
};

export default ChangeLimit;

