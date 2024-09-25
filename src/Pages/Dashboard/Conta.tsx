import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";

export default function Conta() {
  useEffect(() => {
    document.title = "Conta - DSM";
  }, []);

  const username = "John Doe";

  return (
    <div className="flex">
      <Sidebar active="/dashboard/conta" />
      <section className="flex-1 overflow-y-auto max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
        <h1 className="text-3xl font-bold">Configuração da Conta</h1>
        <div className="md:w-3/4 max-w-7xl mx-auto mt-4 space-y-6">
          <div className="md:aspect-square grid gap-4 md:grid-cols-4 md:grid-rows-2 grid-cols-1 grid-rows-6">
            <Card className="md:col-span-4 row-span-2 h-full relative">
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                  Atualize suas informações de perfil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 max-md:flex-col">
                  <div className="md:w-1/2 flex flex-col gap-4 items-center ">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="" alt={username} />
                      <AvatarFallback>
                        {username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Label htmlFor="avatar" className="cursor-pointer">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                        >
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
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="seu@email.com"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <Button className="md:absolute bottom-4 left-4">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 row-span-2 h-full">
              <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
                <CardDescription>Mantenha sua conta segura</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input
                    placeholder="********"
                    id="current-password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input
                    placeholder="********"
                    id="new-password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input
                    placeholder="********"
                    id="confirm-password"
                    type="password"
                  />
                </div>
                <Button>Alterar Senha</Button>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 h-full">
              <CardHeader>
                <CardTitle>Preferências de Notificação</CardTitle>
                <CardDescription>
                  Gerencie suas configurações de notificação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">
                    Notificações por Email
                  </Label>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Notificações Push</Label>
                  <Switch id="push-notifications" />
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 h-full">
              <CardHeader>
                <CardTitle>Privacidade</CardTitle>
                <CardDescription>
                  Controle quem pode ver seu perfil
                </CardDescription>
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
          </div>
        </div>
      </section>
    </div>
  );
}
