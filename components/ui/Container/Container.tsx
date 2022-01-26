import { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';

interface IProps {
  children: ReactNode[] | ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}
const Container: FC<IProps> = ({ children, el: Component = 'div' }) => {
  return <Component className="mx-auto px-6 max-w-8xl">{children}</Component>;
};

export default Container;
