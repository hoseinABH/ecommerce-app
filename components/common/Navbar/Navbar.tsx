import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';
import Usernav from '../Usernav';
import styles from './Navbar.module.scss';

interface IProps {}

const Navbar: FC<IProps> = () => {
  return (
    <Container>
      <div className="flex md:py-6">
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className="text-xl font-bold">NEXT_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accesories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
