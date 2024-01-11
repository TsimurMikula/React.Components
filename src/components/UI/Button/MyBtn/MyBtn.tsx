import classes from './MyBtn.module.css';
import { IBtn } from '../../../../models';

const MyBtn = ({children, onClick}: IBtn) => {
  return (
    <button 
      onClick={onClick} 
      className={classes.myBtn}>
        {children}
    </button>
  );
}

export default MyBtn;
