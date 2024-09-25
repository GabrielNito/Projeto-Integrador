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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";

interface InformacoesPessoaisProps {
  avatar: string;
  username: string;
}

export default function InformacoesPessoais({
  avatar,
  username,
}: InformacoesPessoaisProps) {
  return (
    <Card className="md:col-span-4 row-span-2 h-full relative">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Atualize suas informações de perfil</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 max-md:flex-col">
          <div className="md:w-1/2 flex flex-col gap-4 items-center h-fit xl:justify-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src={avatar} alt={username} />
              <AvatarFallback>
                {username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <Label htmlFor="avatar" className="cursor-pointer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Carregar nova imagem
                </Button>
                <Input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </Label>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 h-fit xl:justify-center">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input disabled id="nickname" value="john_doe" type="nickname" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input disabled id="email" value="seu@email.com" type="email" />
            </div>
          </div>
        </div>
        <Button>Salvar Alterações</Button>
      </CardContent>
    </Card>
  );
}
