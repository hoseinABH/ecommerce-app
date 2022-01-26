import Link from 'next/link';
import styles from './Hero.module.scss';
import { FC } from 'react';

interface IProps {
  headline: string;
  description: string;
}

const Hero: FC<IProps> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <div className={styles.container}>
        <h1 className={styles.headline}>{headline}</h1>
        <div className="flex-1">
          <p className={styles.description}>{description}</p>
          <Link href="/">
            <a className={styles.link}>Read it here</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
