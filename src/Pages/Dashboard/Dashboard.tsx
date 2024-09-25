import Sidebar from "@/components/Sidebar/Sidebar";
import Thread from "@/components/Thread/Thread";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - DSM";
  }, []);

  return (
    <div className="flex">
      <Sidebar active="/dashboard" />
      <section className="flex-1 overflow-y-auto max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
        <Thread />
      </section>
    </div>
  );
}
