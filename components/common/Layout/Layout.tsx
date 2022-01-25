import { FC } from 'react';
import styles from './Layout.module.css';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
