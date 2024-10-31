import { Card, CardHeader } from "@/components/ui/card";
import { OctagonX } from "lucide-react";

export default function ThreadCardError() {
  return (
    <Card className="w-full bg-card text-card-foreground col-span-2">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-destructive/10 text-destructive">
          <OctagonX size={24} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Erro ao buscar as threads</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Tente novamente mais tarde
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
