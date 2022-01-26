import { FC, ReactNode } from 'react';
import styles from './Marquee.module.scss';
import cn from 'classnames';
import Ticker from 'react-ticker';

interface IProps {
  children: ReactNode[];
  variant?: 'primary' | 'secondary';
}
const Marquee: FC<IProps> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(styles.root, {
    [styles.secondary]: variant === 'secondary',
  });
  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
