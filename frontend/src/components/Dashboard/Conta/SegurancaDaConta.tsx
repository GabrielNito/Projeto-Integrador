import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SegurancaDaConta() {
  return (
    <Card className="md:col-span-2 row-span-2 h-full relative">
      <CardHeader>
        <CardTitle>Segurança da Conta</CardTitle>
        <CardDescription>Mantenha sua conta segura</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Senha Atual</Label>
          <Input placeholder="********" id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">Nova Senha</Label>
          <Input placeholder="********" id="new-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
          <Input placeholder="********" id="confirm-password" type="password" />
        </div>
        <Button>Alterar Senha</Button>
      </CardContent>
    </Card>
  );
}
