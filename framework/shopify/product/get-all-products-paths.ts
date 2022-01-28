import { ProductConnection } from '@framework/schema';
import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import getAllProductsPathsQuery from '@framework/utils/queries/get-all-products-paths';

type ReturnedType = {
  products: Pick<Product, 'slug'>[];
};
const getAllProductsPaths = async (
  config: ApiConfig
): Promise<ReturnedType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  });

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return { products };
};

export default getAllProductsPaths;
