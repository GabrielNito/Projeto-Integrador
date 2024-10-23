import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import ContentHomePage from "../../components/HomePage/ContentHomePage";
import LinksSection from "../../components/HomePage/LinksSection";

export default function Home() {
  useEffect(() => {
    document.title = "Home - DSM";
  }, []);

  return (
    <>
      <Navbar />
      
      <LinksSection />
      
      <ContentHomePage />

    </>
  );
}
