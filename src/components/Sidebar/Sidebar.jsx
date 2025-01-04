import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import {
  TbFileExport,
  TbDeviceDesktopAnalytics,
  TbLogout2,
} from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import LinkItem from "./LinkItem";

const Sidebar = ({ isSideBarOpen }) => {
  const { user, logout } = useAuth0();

  const navItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: <RiDashboardHorizontalLine />,
    },
    { path: "/payout", label: "Payout", icon: <MdPayment /> },
    { path: "/export", label: "Export", icon: <TbFileExport /> },
    {
      path: "/analytics",
      label: "Analytics",
      icon: <TbDeviceDesktopAnalytics />,
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-20 lg:w-56 h-screen pt-20 bg-light-fore  border-light-back 
      md:translate-x-0 dark:bg-dark-back  transition-transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-4 font-medium">
      
          {navItems.map((Item,idx)=><li key={idx}><LinkItem path={Item.path} icon={Item.icon} label={Item.label} /></li>)}
          <li>
            <button
              className="w-full flex justify-between items-center py-2 px-4 rounded-lg text-gray-900 dark:text-dark-text hover:bg-light-back dark:hover:bg-dark-fore"
              onClick={() => logout({ returnTo: window.location.origin})}>
              <TbLogout2 />
              <span className="hidden lg:block">Logout</span>
            </button>
          </li>
          <li className="lg:hidden flex items-center justify-center">
            <img src={user?.picture} alt="User" className="w-6 rounded-full" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
