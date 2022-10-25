import axios from '.';
import { IProduct } from '../interfaces/product';

const getProducts = async () => {
  const response = await axios.get<IProduct[]>('/items');
  return response.data;
};
const getTags = async () => {
  const response = await axios.get<string[]>('/tags');
  return response.data;
};

const ProductService = { getProducts, getTags };

export default ProductService;
