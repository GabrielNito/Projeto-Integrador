import ThreadHeader from "@/components/Forum/Thread/ThreadHeader";
import ThreadPost from "@/components/Forum/Thread/ThreadPost";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  data: Thread;
  message: string;
}

export default function Thread() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentThread, setThread] = useState<Thread>();

  const [, setLikes] = useState(0);

  async function fetchThreads() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/threads/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: Response = await response.json();

      setThread(result.data);
      setLikes(result.data.likes);
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

      <section className="max-lg:p-4 lg:w-1/2 lg:mx-auto lg:p-12 flex flex-col gap-4">
        {currentThread && (
          <ThreadHeader thread={currentThread} setLikes={setLikes} />
        )}

        {currentThread?.posts.map((post, index) => {
          return <ThreadPost post={post} key={index} />;
        })}

        {isLoading && <p>Loading</p>}

        {error && <p>Error</p>}
      </section>
    </div>
  );
}
