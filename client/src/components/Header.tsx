"use client";

import { Icons } from "./ui/icons";

const Header = () => (
  <header className="hidden md:flex items-center justify-end p-3 bg-white shadow">
    <div className="flex items-center space-x-4">
      {/* Notification Bell  */}
      <button className="p-2">
        <span className="text-gray-600">
          <Icons.GoBell size={22} />
        </span>
      </button>

      {/* Profile section  */}
      <div className="flex space-x-3">
        <img
          src={"/jurica-koletic-7YVZYZeITc8-unsplash.jpg"}
          alt="Profile Photo"
          className="w-[3rem] h-[3rem] rounded-full"
        />

        {/* Name and Post */}
        <div className=" flex flex-col">
          <strong>Lorem Ips: </strong>
          <p className="text-gray-400">Manager</p>
        </div>

        {/* More Options */}
        <div>
          <Icons.IoMdArrowDropdown />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
