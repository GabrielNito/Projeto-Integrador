import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ThreadCardLoading from "../../components/Forum/Threads/ThreadCardLoading";
import ThreadCardError from "../../components/Forum/Threads/ThreadCardError";
import ThreadCard from "../../components/Forum/Threads/ThreadCard";
import { ResponseThreads, ThreadType } from "@/components/Forum/types";
import { API_URL, fetchUserToken } from "@/components/utils";

export default function Forum() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [likedThreads, setLikedThreads] = useState<number[]>([]);

  async function fetchUser() {
    const localUser = await fetchUserToken();

    const likedThreadsArray = localUser.dados.likedThreads
      ? JSON.parse(localUser.dados.likedThreads)
      : [];
    setLikedThreads(likedThreadsArray);
  }

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

    fetchUser();

    document.title = "Fórum - DSM";
  }, []);

  return (
    <div>
      <Navbar />

      <section className="p-4 lg:w-[calc(100%-2rem)] lg:px-20 lg:py-12 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          Fórum DSM - Desenvolvimento de Software Multiplataforma
        </h1>
        <h2 className="text-muted-foreground">
          Espaço para troca de conhecimento e discussão: compartilhe ideias,
          dúvidas, experiências, dicas e colabore com a comunidade
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {threads.map((thread) => {
            return (
              <ThreadCard
                thread={thread}
                likedThreads={likedThreads}
                key={thread.id}
              />
            );
          })}

          {isLoading && <ThreadCardLoading />}

          {error && <ThreadCardError />}
        </div>
      </section>
    </div>
  );
}
