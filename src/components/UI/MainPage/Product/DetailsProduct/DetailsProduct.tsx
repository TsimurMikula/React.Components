import { IProductProps } from '../../../../../models';
import classes from './DetailsProduct.module.css'

const DetailsProduct = ({ product }: IProductProps) => {
  return (
    <div className={classes.prod}>
      <p className={classes.title}>{product.title}</p>
      <img
        src={product.images[0]}
        className={classes.img}
        alt={product.title}
      />
      <p className={classes.description}>Description: {product.description}</p>
      <p className={classes.description}>Price: ${product.price}</p>
      <p className={classes.description}>
        Discount: {product.discountPercentage}%
      </p>
      <p className={classes.description}>Rating: {product.rating}</p>
      <p className={classes.description}>Brand: {product.brand}</p>
      <p className={classes.description}>Category: {product.category}</p>
      <p className={classes.description}>Id: {product.id}</p>
    </div>
  );
}

export default DetailsProduct;
