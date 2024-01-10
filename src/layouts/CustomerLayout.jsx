import React from "react";
import { Outlet } from "react-router-dom";

export const CustomerLayout = () => {
  return (
    <main className="p-5 bg-color-bg h-screen overflow-y-auto">
      <Outlet />
    </main>
  );
};
