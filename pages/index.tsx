import Head from 'next/head';
import getAllProducts from '@framework/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '@framework/api/config';

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
  console.log(products[0].id);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1></h1>
    </div>
  );
}
