import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import ContentHomePage from "../../components/HomePage/ContentHomePage";

export default function Home() {
  useEffect(() => {
    document.title = "Home - DSM";
  }, []);

  return (
    <>
      <Navbar />

      <ContentHomePage />
    </>
  );
}
