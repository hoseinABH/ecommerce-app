import { Product } from '@common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './ProductCard.module.scss';

interface IProps {
  product: Product;
}

const placeholderImage = '/product-image-placeholder.svg';

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={styles.productConatiner}>
        <div className={styles.productBg}></div>
        <div className={styles.productTag}>
          <h3 className={styles.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={styles.productPrice}>14$ </span>
        </div>

        {product.images && (
          <>
            <Image
              className={styles.productImage}
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
