"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/pages/dashboard";
import Inputs from "@/pages/inputs";
import Portfolio from "@/pages/portfolio";
import Profile from "@/pages/profile";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
        <main className="flex-1 bg-gray-100">
          <Header />
          <div className="m-0 md:m-6 md:py-4 md:px-8 bg-white rounded-lg">
            {activeTab === "Dashboard" && <Dashboard />}
            {activeTab === "Portfolio" && <Portfolio />}
            {activeTab === "Inputs" && <Inputs />}
            {activeTab === "Profile" && <Profile />}
          </div>{" "}
        </main>
      </div>
    </>
  );
};

export default Home;
