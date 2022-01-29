import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths, getProduct } from '@framework/product';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((p) => {
      return {
        params: {
          slug: p.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct(config);

  return {
    props: {
      product,
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

ProductSlug.Layout = Layout;
