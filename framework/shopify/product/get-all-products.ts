import { ProductConnection } from './../schema.d';
import { fetchApi } from '../utils/fetch-api';
import getAllProductsQuery from '../utils/queries/get-all-products';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
  return data;
};

export default getAllProducts;
