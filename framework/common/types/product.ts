interface ProductImage {
  url: string;
  alt?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  path: string;
  slug: string;
  images: ProductImage[];
  vendor: string;
}
