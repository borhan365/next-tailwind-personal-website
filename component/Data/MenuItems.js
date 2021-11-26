import { AiOutlineHome } from 'react-icons/ai';
import { BsBook, BsFolderSymlink, BsInfoCircle } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

const MenuItems = [
  {
    label: 'Home',
    url: "/",
    icon: <AiOutlineHome />,
    active: true,
  },
  {
    label: 'About Me',
    url: "/about",
    icon: <BsInfoCircle />,
    active: false,
  },
  {
    label: 'Contact',
    url: "/contact",
    icon: <FiPhoneCall />,
    active: false,
  },
 {
    label: 'Portfolio',
    url: "/portfolio",
    icon: <BsFolderSymlink />,
    active: false,
  },
  {
     label: 'Blog',
     url: "/blog",
     icon: <BsBook />,
     active: false,
   },
];

export default MenuItems;