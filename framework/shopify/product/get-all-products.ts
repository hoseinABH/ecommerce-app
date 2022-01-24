import { ProductConnection } from './../schema.d';
import { fetchApi } from '../utils/fetch-api';
import { normalizeProduct } from '../utils/normalize';
import { Product } from '../../common/types/product';
import getAllProductsQuery from '../utils/queries/get-all-products';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return products;
};

export default getAllProducts;
