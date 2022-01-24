import { ProductConnection } from '@framework/schema';
import { fetchApi } from '@framework/utils/fetch-api';
import { normalizeProduct } from '@framework/utils/normalize';
import { Product } from '@common/types/product';
import getAllProductsQuery from '@framework/utils/queries/get-all-products';

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
