import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';
import type { InferGetStaticPropsType } from 'next';

// components
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid layout="A">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
}

Home.Layout = Layout;
