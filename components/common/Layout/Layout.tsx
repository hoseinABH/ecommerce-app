import { Sidebar } from '@components/ui';
import { FC } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar isOpen={true} onClose={() => {}}>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </Sidebar>
      <main className="fit">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
