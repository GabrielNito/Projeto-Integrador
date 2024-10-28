import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ThreadCardLoading from "../../components/Forum/Threads/ThreadCardLoading";
import ThreadCardError from "../../components/Forum/Threads/ThreadCardError";
import ThreadCard from "../../components/Forum/Threads/ThreadCard";
import { API_URL, ResponseThreads, ThreadType } from "@/components/Forum/types";

export default function Forum() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [threads, setThreads] = useState<ThreadType[]>([]);

  async function fetchThreads() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/threads`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: ResponseThreads = await response.json();

      setThreads(result.data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="p-4 max-lg:w-[calc(100%-2rem)] lg:px-20 lg:py-12 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          Fórum DSM - Desenvolvimento de Software Multiplataforma
        </h1>
        <h2 className="text-muted-foreground">
          Espaço para troca de conhecimento e discussão: compartilhe ideias,
          dúvidas, experiências, dicas e colabore com a comunidade
        </h2>

        <div className="w-full grid lg:grid-cols-2 gap-4">
          {threads.map((thread) => {
            return <ThreadCard thread={thread} key={thread.id} />;
          })}

          {isLoading && <ThreadCardLoading />}

          {error && <ThreadCardError />}
        </div>
      </section>
    </div>
  );
}
