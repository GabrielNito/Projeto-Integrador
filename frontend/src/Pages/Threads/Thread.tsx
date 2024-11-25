import ThreadHeader from "@/components/Forum/Thread/ThreadHeader";
import ThreadPost from "@/components/Forum/Thread/ThreadPost";
import { API_URL, ResponseThread, ThreadType } from "@/components/Forum/types";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Thread() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentThread, setThread] = useState<ThreadType>();

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

      const result: ResponseThread = await response.json();

      document.title = `${result.data.title} - DSM`;

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

      <section className="flex flex-col gap-4 max-lg:p-4 lg:w-1/2 lg:mx-auto lg:p-12">
        {currentThread && <ThreadHeader thread={currentThread} />}

        {currentThread?.posts.map((post, index) => {
          return <ThreadPost post={post} key={index} />;
        })}

        {isLoading && <p>Loading</p>}

        {error && <p>Error</p>}
      </section>
    </div>
  );
}
