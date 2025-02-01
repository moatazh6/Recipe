import React from "react";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="container my-5 py-20 lg:py-10">
        <Outlet />
      </div>
    </>
  );
}
