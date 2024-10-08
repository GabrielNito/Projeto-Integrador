import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardWrapper from "./DashboardWrapper";
import { useEffect, useState } from "react";

export default function General() {
  const [sidebarLink, setSidebarLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const href = window.location.href;
    const temp = href.split("/");
    setSidebarLink(temp[temp.length - 1]);
  }, [location.pathname]);

  return (
    <div className="flex">
      <Sidebar active={sidebarLink} />
      <DashboardWrapper>
        <Outlet />
      </DashboardWrapper>
    </div>
  );
}
