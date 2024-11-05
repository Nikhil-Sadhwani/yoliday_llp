"use client";
import { Icons } from "./ui/icons";
import { FC } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}: SidebarProps) => {
  const menuItems = [
    {
      name: "Dashboard",
      desktopIcons: <Icons.MdOutlineDashboardCustomize size={22} />,
      mobileIcons: <Icons.TbHomeFilled size={22} />,
      navigate: "/",
    },
    {
      name: "Portfolio",
      desktopIcons: <Icons.FaBullhorn size={22} />,
      mobileIcons: <Icons.FaBriefcase size={22} />,
      navigate: "/portfolio",
    },
    {
      name: "Inputs",
      desktopIcons: <Icons.FaPencilRuler size={22} />,
      mobileIcons: <Icons.MdAssignmentAdd size={22} />,
      navigate: "/inputs",
    },
    {
      name: "Profile",
      desktopIcons: <Icons.MdContacts size={22} />,
      mobileIcons: <Icons.IoPersonSharp size={22} />,
      navigate: "/profile",
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:w-64 bg-orange-600 text-white min-h-screen flex-col">
        <h1 className="text-2xl font-semibold p-4">LOGO</h1>
        <nav className="mt-8 p-1">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center space-x-6 px-4 py-2 rounded-lg cursor-pointer
                  ${
                    activeTab === item.name
                      ? "bg-gradient-to-r from-white/70 to-white/10 text-white rounded-md"
                      : "text-white"
                  }`}
              >
                <div>{item.desktopIcons}</div>
                <a className="text-sm hover:text-orange-300">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Bottom navigation for mobile screens */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200">
        <ul className="flex justify-around py-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className="flex flex-col items-center text-xs cursor-pointer"
            >
              <div
                className={`text-2xl ${
                  activeTab === item.name ? "text-orange-600" : "text-gray-400"
                }`}
              >
                {item.mobileIcons}
              </div>
              <span
                className={`mt-1 ${
                  activeTab === item.name
                    ? "text-orange-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item.name === "Dashboard" ? "Home" : item.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
