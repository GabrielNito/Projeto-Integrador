import { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { motion } from "framer-motion";

export default function Login() {
  useEffect(() => {
    document.title = "Login - DSM";
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <div className="max-lg:hidden relative w-1/2 h-screen bg-muted flex justify-center items-center">
          <div className="absolute top-8 left-8 flex gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
          <motion.img
            src="/logo_sideview.png"
            alt="Logo DSM Fatec"
            className="aspect-square w-1/2 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute bottom-8 left-8">
            <p className="text-muted-foreground">
              Desenvolvimento de Software Multiplataforma
            </p>
          </div>
        </div>
        <div className="w-full p-4 lg:w-1/2 lg:p-20 flex flex-col">
          <div className="lg:hidden absolute top-8 left-8 flex gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="lg:h-4 lg:w-4" />
              </Button>
            </Link>
            <ModeToggle />
          </div>

          <div className="flex gap-2 items-center justify-end absolute max-lg:bottom-8 lg:top-8 right-8">
            <p className="text-muted-foreground">Ainda não tem uma conta?</p>
            <Link to="/cadastro">
              <Button variant="secondary">Criar uma</Button>
            </Link>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </>
  );
}
