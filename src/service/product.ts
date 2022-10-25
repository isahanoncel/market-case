import axios from ".";
import { IProduct } from "../interfaces/product";

const getProducts = async () => {
    const response =  await axios.get<IProduct[]>("/items");
    return await response.data;
};

const ProductService = { getProducts };

export default ProductService;
