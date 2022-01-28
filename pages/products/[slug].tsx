import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import getAllProductsPaths from '@framework/product/get-all-products-paths';
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
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Hello world {product?.slug}</h1>
    </div>
  );
}

ProductSlug.Layout = Layout;
