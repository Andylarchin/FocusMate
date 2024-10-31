import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <Sidebar/>
        <main className="flex w-full flex-col bg-gray-50">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
