import { MouseEventHandler } from 'react';
import classes from './MyBtnPagination.module.css';

interface IBtnPagination {
p: number;
page: number;
onClick: MouseEventHandler
}

const MyBtnPagination = ({p, page, onClick }: IBtnPagination) => {
  return (
    <button
      onClick={onClick}
      className={
        p === page
          ? `${classes.btnPage} ${classes.btnPageCurrent}`
          : classes.btnPage
      }
    >
      {p}
    </button>
  );
}

export default MyBtnPagination;
