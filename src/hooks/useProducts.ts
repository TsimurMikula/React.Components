import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import { AxiosError } from 'axios';
import getProducts from '../modules/getProducts';
import { getCountPages } from '../modules/getPages';
import { useSearchParams } from 'react-router-dom';

const useProducts = (searchProduct: string, limit: string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchProduct(searchProduct);
  }, [searchProduct, limit, page]);

  const fetchProduct = async (searchProduct: string) => {
    try {
      setError('');
      setLoading(true);
      const product = await getProducts(limit, skip, searchProduct);
      setProducts(product.products);
      setTotalPages(getCountPages(product.total, limit));
      setLoading(false);
      setSearchParams({
        page: page.toString(),
        limit: limit,
        search: searchProduct,
        details: '',
      });
      localStorage.setItem('title', searchProduct);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  return {
    products,
    setProducts,
    loading,
    setLoading,
    error,
    setError,
    page,
    setPage,
    skip,
    setSkip,
    totalPages,
  };
};

export default useProducts;
