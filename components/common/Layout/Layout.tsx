import { FC } from 'react';
import Footer from '../Footer';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
