import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Computer, Laptop, Laptop2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function AvisoMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile || !isDialogOpen) {
    return null;
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Aviso</DialogTitle>
          <div className="flex justify-center gap-4">
            <Laptop size={80} />
            <Laptop2 size={80} />
            <Computer size={80} />
          </div>
          <DialogDescription>
            Para uma melhor experiência, considere usar um computador para
            visualizar esta tabela.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
