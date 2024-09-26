import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - DSM";
  }, []);

  return (
    <>
      <Navbar />
      <section className="max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
        <div>
          <Button variant="link">
            <a href="/forum">Forum</a>
          </Button>
          <Button variant="link">
            <a href="/dashboard/geral">Dashboard</a>
          </Button>
        </div>
      </section>
    </>
  );
}
