import CartSidebar from '@components/cart/CartSidebar';
import { Sidebar } from '@components/ui';
import { useUI } from '@components/ui/context';
import { FC } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const ui = useUI();
  const onClose = () => ui.closeSidebar();
  return (
    <div className={styles.root}>
      <Navbar />

      {/* Cart Sidebar */}
      <Sidebar isOpen={ui.isSidebarOpen} onClose={onClose}>
        <CartSidebar />
      </Sidebar>
      {/* Cart Sidebar */}

      {/* Page Content */}
      <main className="fit">{children}</main>
      {/* Page Content */}

      <Footer />
    </div>
  );
};

export default Layout;
