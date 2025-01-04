import { Link } from "react-router-dom";

const LinkItem = ({path,icon,label}) => {
  return (
    <Link
    to={path}
    className="flex justify-between items-center py-2 px-4 rounded-lg text-gray-900 dark:text-dark-text hover:bg-light-back dark:hover:bg-dark-fore">
    {icon}
    <span className="hidden lg:block">{label}</span>
  </Link>
  )
}

export default LinkItem;
