import { Product } from '@common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  product: Product;
}

const placeholderImage = '/product-image-placeholder.svg';

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="">
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>

          <span>14 $</span>
        </div>

        {product.images && (
          <>
            <Image
              alt={product.name ?? 'Product Image'}
              src={`/${product.images[0].url}` ?? placeholderImage}
              height={540}
              width={540}
              quality={85}
              layout="responsive"
            />
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
