import cn from 'classnames';
import { useUI } from '@components/ui/context';

// icons
import { Bag, Cross } from '@components/icons';

const CartSidebar = () => {
  const { closeSidebar } = useUI();

  const isEmpty = true;

  const rootClass = cn('h-full flex flex-col', {
    'bg-secondary text-secondary': isEmpty,
  });
  return (
    <div className={rootClass}>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="h-7 flex items-center">
            <button
              onClick={closeSidebar}
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
            <Bag className="absolute" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p className="text-accents-3 px-10 text-center pt-2">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default CartSidebar;
