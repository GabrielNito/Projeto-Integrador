"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import PasswordInput from "@/components/Login/PasswordInput";
import { API_URL } from "../utils";

const formSchema = z.object({
  email: z.string().email({
    message: "Insira um email válido.",
  }),
  password: z.string().min(8, {
    message: "A senha precisa ter pelo menos 8 caracteres",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`${API_URL}/api/login/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        toast({
          title: "Usuário logado com sucesso",
        });
        const result = await response.json();

        localStorage.setItem("auth-token", result);
      } else {
        toast({
          title: "Error fetching API",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: `Error: ${error}`,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="submit" variant="secondary">
            Login
          </Button>

          <Link to="/recuperacao-senha">
            <Button variant="link" className="text-muted-foreground">
              Esqueci minha senha
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
