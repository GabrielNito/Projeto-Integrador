import Certifications from "@/components/Certifications/Certifications";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";

export default function CertificationsPage() {
  useEffect(() => {
    document.title = "Certificações - DSM";
  }, []);

  return (
    <>
      <Navbar />

      <Certifications />
    </>
  );
}
