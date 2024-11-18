import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ThreadCardLoading from "../../components/Forum/Threads/ThreadCardLoading";
import ThreadCardError from "../../components/Forum/Threads/ThreadCardError";
import ThreadCard from "../../components/Forum/Threads/ThreadCard";

const API_URL = import.meta.env.VITE_FETCH_URL || "http://localhost:3001";

interface Post {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
}

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: "STUDENT" | "ADMIN";
  createAt: string;
  updateAt: string;
  likedPosts: string;
  likedThreads: string;
  avatar: string | null;
  badges: string;
}

interface Thread {
  id: number;
  title: string;
  likes: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
  posts: Post[];
  user: User;
}

interface Response {
  data: Thread[];
  message: string;
}

export default function Forum() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [threads, setThreads] = useState<Thread[]>([]);

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

      const result: Response = await response.json();

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
