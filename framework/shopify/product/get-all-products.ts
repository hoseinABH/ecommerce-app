import { ProductConnection } from '@framework/schema';
import { normalizeProduct } from '@framework/utils/normalize';
import { Product } from '@common/types/product';
import { ApiConfig } from '@common/types/api';
import getAllProductsQuery from '@framework/utils/queries/get-all-products';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return products;
};

export default getAllProducts;
