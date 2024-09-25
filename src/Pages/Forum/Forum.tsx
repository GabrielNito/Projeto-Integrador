import Navbar from "@/components/Navbar/Navbar";
import Thread from "@/components/Thread/Thread";
import { useEffect } from "react";

export default function Forum() {
  useEffect(() => {
    document.title = "Fórum - DSM";
  }, []);

  return (
    <>
      <Navbar />
      <section className="max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
        <Thread />
      </section>
    </>
  );
}
