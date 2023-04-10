import React, { useState } from "react";

import Sidebar from "./SideBar";

import Header from "./Header";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <div>loading...</div>;
  }

  return (
    <div
      className="
  flex
  min-h-screen
  w-full
  bg-gray-100
  dark:bg-[#151619]"
    >
      {isSidebarOpen && <Sidebar />}
      <main className="w-full">
        <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />

        {children}
      </main>
    </div>
  );
}
