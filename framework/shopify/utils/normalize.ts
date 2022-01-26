import {
  ImageEdge,
  Product as ShopifyProduct,
  MoneyV2,
} from '@framework/schema';
import { Product } from '@common/types/product';

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProductPrice({ currencyCode, amount }: MoneyV2) {
  return {
    value: +amount,
    currencyCode,
  };
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    images: imageConnection,
    vendor,
    description,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    path: `/${handle}`,
    description,
    price: normalizeProductPrice(priceRange.minVariantPrice),
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };

  return product;
}
