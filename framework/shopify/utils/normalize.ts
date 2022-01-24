import { ImageEdge, Product as ShopifyProduct } from '@framework/schema';
import { Product } from '@common/types/product';

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    images: imageConnection,
    vendor,
    description,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    path: `/${handle}`,
    description,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };

  return product;
}
