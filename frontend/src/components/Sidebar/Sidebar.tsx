import { LockIcon, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sideBarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bh-white w-64`;

  return (
    <>
      <div className={sideBarClassNames}>
        <div className="flex h-[100%] w-full flex-col justify-start">
          <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              FocusMate
            </div>
          </div>
          <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
            <img src="" alt="Logo" width={40} height={40} />
            <div>
              <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                Andy's Team
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                <p className="text-xs text-gray-500">Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === href ||
    (location.pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div
      className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gry-100 dark:bg-black dark:hover:bg-gray-700 ${
        isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
      }`}
    >
      {isActive && (
        <div className="absolute left-0 w-[5px] h-full bg-blue-200"></div>
      )}

      <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
      <span className={`font-medium text-gray-800 dark:text-gray-100`}>
        {label}
      </span>
    </div>
  );
};

export default Sidebar;
