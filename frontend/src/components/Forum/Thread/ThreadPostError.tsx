import { Card, CardHeader } from "@/components/ui/card";
import { OctagonX } from "lucide-react";

export default function ThreadPostError() {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-destructive/10 text-destructive">
                <OctagonX size={24} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Erro ao buscar post</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Tente novamente mais tarde
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
