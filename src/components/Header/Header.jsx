import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo-sports-duniya.svg";

const Header = ({ toggleDarkMode, darkMode, toggleSideBar }) => {
  const { user } = useAuth0();
  return (
    <nav className="fixed top-0 z-50 w-full bg-light-fore border-b border-light-back dark:bg-dark-back dark:border-dark-back">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="w-3/4 flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-light-text rounded-lg block lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-light-uni dark:text-dark-text dark:hover:bg-gray-700 dark:focus:ring-light-uni"
              onClick={toggleSideBar}>
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="#" className="flex ms-2 md:me-24 gap-2">
              <img src={logo} alt="" />
              <span className="self-center font-extrabold text-light-text text-xl sm:text-2xl whitespace-nowrap dark:text-dark-text">
                Sports Dunia
              </span> 
            </a>
          </div>
          <div className="justify-end flex lg:justify-between w-1/4">
            <div className="hidden lg:flex items-center gap-4">
              <img
                src={user?.picture}
                alt="img"
                className="w-10 rounded-full"
              />
              <span className="text-nowrap text-purple-500 dark:text-dark-text font-semibold text-xl ">
                {user?.name}
              </span>
            </div>
            <button
              className="dark:bg-light-fore  rounded-full p-3"
              onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
