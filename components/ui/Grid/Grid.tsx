import { FC, ReactNode } from 'react';
import styles from './Grid.module.scss';
import cn from 'classnames';

interface IProps {
  children: ReactNode;
  layout?: 'A' | 'B';
}

const Grid: FC<IProps> = ({ children, layout }) => {
  const rootClassName = cn(styles.gridContainer, {
    [styles.layoutA]: layout === 'A',
    [styles.layoutB]: layout === 'B',
  });
  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
