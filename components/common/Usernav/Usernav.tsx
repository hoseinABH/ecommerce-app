import Link from 'next/link';
import { useUI } from '@components/ui/context';

// icons
import { Bag as Cart, Heart } from '@components/icons';

const Usernav = () => {
  const ui = useUI();

  const handleSidebar = () => {
    ui.openSidebar();
  };

  return (
    <nav>
      <ul className="flex">
        <li className="relative mr-6 flex items-center text-primary outline-none cursor-pointer hover:scale-110 hover:text-accents-6">
          <Cart onClick={handleSidebar} />
          {/* <span className="">0</span> */}
        </li>
        <li className="relative mr-6 flex items-center text-primary outline-none cursor-pointer hover:scale-110 hover:text-accents-6">
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
