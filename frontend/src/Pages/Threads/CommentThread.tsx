"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { API_URL, authToken } from "@/components/utils";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Link, useParams } from "react-router-dom";

const threadSchema = z.object({
  content: z
    .string()
    .min(1, "Campo título é necessário")
    .max(300, "Campo título não pode ultrapassar 300 caracteres"),
});

export default function CommentThread() {
  const { threadId } = useParams();
  const form = useForm<z.infer<typeof threadSchema>>({
    resolver: zodResolver(threadSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof threadSchema>) {
    try {
      const response = await fetch(`${API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify({
          threadId: Number(threadId),
          content: values.content,
        }),
      });

      const result = await response.json();

      if (result.message === "Post created successfully") {
        toast({
          title: "Comentário criado com sucesso",
          description: "Visite a thread para visualizar sua resposta",
          action: (
            <ToastAction altText="Visitar" asChild>
              <Link to={`/forum/${threadId}`}>Visitar</Link>
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao criar novo comentário",
        variant: "destructive",
      });
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />

      <section className="p-4 lg:w-[calc(100%-2rem)] lg:px-20 lg:py-12 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Responder a Thread</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resposta</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite o comentário"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A resposta deve ter no máximo 300 caracteres.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">
                Cancelar
              </Button>
              <Button type="submit">Publicar</Button>
            </div>
          </form>
        </Form>
      </section>
      <Toaster />
    </div>
  );
}
