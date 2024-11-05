"use client";
import React, { useEffect, useState } from "react";
import Navbar_With_Search_And_Filter from "@/components/Navbar_With_Search_And_Filter";
import PortfolioCard from "@/components/PortfolioCard";
import { Icons } from "@/components/ui/icons";
import axios from "axios";

interface projectData {
  id: number;
  title: string;
  description: string;
  language: string;
  author: string;
  imageUrl: string;
  type: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Project");
  const [portfolioData, setPortfolioData] = useState<projectData[]>([]);

  // Fetch data based on the active tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data`, {
          params: { type: activeTab },
        });
        setPortfolioData(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();
  }, [activeTab]);
  return (
    <>
      <div className="flex justify-between p-4 md:p-0">
        <h1 className="font-bold text-lg">Portfolio</h1>

        <div>
          <button className="md:hidden p-2">
            <span className="text-gray-600">
              <Icons.FaShoppingBag size={22} className="text-orange-600" />
            </span>
          </button>

          <button className="md:hidden p-2">
            <span className="text-gray-600">
              <Icons.FaBell size={22} className="text-orange-600" />
            </span>
          </button>
        </div>
      </div>
      <Navbar_With_Search_And_Filter
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="h-[80vh] md:h-[475px] overflow-y-auto p-[20px] md:p-0">
        <div className="grid grid-cols-1 gap-3 md:w-[70%] overflow-y-auto">
          {portfolioData.map((data, index) => (
            <PortfolioCard
              key={index}
              title={data.title}
              description={data.description}
              language={data.language}
              author={data.author}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
