import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Privacidade() {
  return (
    <Card className="md:col-span-2 h-full">
      <CardHeader>
        <CardTitle>Privacidade</CardTitle>
        <CardDescription>Controle quem pode ver seu perfil</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="profile-public">Perfil Público</Label>
          <Switch id="profile-public" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="show-email">Mostrar Email</Label>
          <Switch id="show-email" />
        </div>
      </CardContent>
    </Card>
  );
}
