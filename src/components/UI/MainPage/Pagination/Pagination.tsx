import classes from './Pagination.module.css';
import { getArrayPages } from '../../../../modules/getPages';
import MyBtnPagination from '../../Button/MyBtnPagination/MyBtnPagination';
import IPagination from '../../../../models';

const Pagination = ({ loading, totalPages, page, pagination }: IPagination) => {
  
  const arrayPages = getArrayPages(totalPages);

  return (
    <div className={classes.pagination}>
      {!loading &&
        arrayPages.map((p) => (
          <MyBtnPagination
            onClick={() => pagination(p)}
            key={p}
            page={page}
            p={p}
          />
        ))}
    </div>
  );
};

export default Pagination;
