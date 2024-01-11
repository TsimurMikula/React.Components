import { NavLink } from 'react-router-dom';
import { IProductProps } from '../../../../models';
import classes from './Product.module.css'

const Product = ({ product }: IProductProps) => {
  return (
    <NavLink to={`details/${product.id}`}>
      <div className={classes.prod}>
        <img
          src={product.images[0]}
          className={classes.img}
          alt={product.title}
        />
        <p className={classes.title}>{product.title}</p>
        <p className={classes.description}>{product.description}</p>
      </div>
    </NavLink>
  );
}

export default Product;
