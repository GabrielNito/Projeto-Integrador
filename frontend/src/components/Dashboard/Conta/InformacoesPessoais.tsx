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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@/components/utils";

interface InformacoesPessoaisProps {
  userData: User | undefined;
}

export default function InformacoesPessoais({
  userData: data,
}: InformacoesPessoaisProps) {
  return (
    <Card className="relative h-full row-span-2 lg:col-span-4">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Atualize suas informações de perfil</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 max-md:flex-col">
          <div className="flex flex-col items-center gap-4 md:w-1/2 h-fit xl:justify-center">
            <Avatar className="w-24 h-24">
              <AvatarFallback>
                {data?.dados.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 h-fit xl:justify-center">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Username</Label>
              <Input disabled id="name" value={data?.dados.username} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                id="email"
                value={data?.dados.email}
                type="email"
              />
            </div>
          </div>
        </div>
        <Button>Salvar Alterações</Button>
      </CardContent>
    </Card>
  );
}
