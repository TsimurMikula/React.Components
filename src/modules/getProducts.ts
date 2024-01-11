import axios from 'axios';

const getProducts = async (limit: string, skip: number, searchProduct?: string) => {
  if (searchProduct) {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchProduct}`
    );
    const search = response.data;
    return search;
  } else {
    const response = await axios.get('https://dummyjson.com/products', {
      params: {
        limit: limit,
        skip: skip
      }
    });
    const data = response.data;
    return data;
  }

};

export default getProducts;
