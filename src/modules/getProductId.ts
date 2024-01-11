import axios from 'axios';

const getProductId = async (id: string) => {
  if (id) {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const getProductId = response.data;
    return getProductId;    
  } 
};

export default getProductId;
