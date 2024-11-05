"use client";

import { Icons } from "./ui/icons";

const Navbar_With_Search_And_Filter = (props: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      {/* Tabs and Search/Filter Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-6">
        {/* Tabs Section */}
        <div className="flex flex-wrap border-b lg:border-none pb-2 lg:pb-0">
          {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
            <button
              key={tab}
              onClick={() => props.setActiveTab(tab)}
              className={`relative text-center text-md font-medium text-gray-600 pb-2 ${
                props.activeTab === tab ? "text-orange-600" : ""
              } ${"flex-1 lg:flex-none"}`}
            >
              <span className="m-6 ">{tab}</span>

              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-300"></span>
              {props.activeTab === tab && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600"></span>
              )}
            </button>
          ))}
        </div>

        {/* Search Input and Filter Button on Desktop */}
        <div className="mt-4 px-4 lg:mt-0 lg:px-0 lg:flex lg:items-center lg:space-x-4">
          {/* Filter Button - Only visible on desktop */}
          <button className="hidden lg:flex items-center space-x-1 text-gray-700">
            <Icons.MdFilterListAlt className="text-md" />
            <span className="text-md">Filter</span>
          </button>

          {/* Search Input */}
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search a project"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-600 focus:outline-none focus:border-orange-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-600 p-1 rounded-lg">
              <Icons.MdSearch className="text-md" color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Filter Button for Mobile Only */}
      <button className="flex items-center space-x-1 fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white p-3 rounded-full shadow-lg lg:hidden">
        <Icons.MdFilterList className="text-lg" />
        <span className="text-md">Filter</span>
      </button>
    </div>
  );
};

export default Navbar_With_Search_And_Filter;
