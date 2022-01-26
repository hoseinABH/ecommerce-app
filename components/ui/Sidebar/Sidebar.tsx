import { FC, MutableRefObject, ReactNode, useRef } from 'react';

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<IProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <>
      {isOpen ? (
        <div ref={ref} className="fixed inset-0 overflow-hidden h-full z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
