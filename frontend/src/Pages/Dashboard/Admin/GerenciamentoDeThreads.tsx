"use client";

import { useEffect, useState } from "react";
import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { Loader2 } from "lucide-react";
import { API_URL } from "@/components/utils";
import DashboardThreadCard from "@/components/Dashboard/GerenciamentoDeThreads/DashboardThreadCard";

interface Thread {
  id: number;
  title: string;
  likes: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
  posts: any[];
  user: any;
}

export default function GerenciamentoDeThreads() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Gerenciamento de Threads - DSM";
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await fetch(`${API_URL}/api/threads`);
      const data = await response.json();
      console.log(data);
      setThreads(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching threads:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <DashboardTitle title="Gerenciamento de Threads" />
      <div className="grid gap-6 mt-6">
        {threads.map((thread) => (
          <div key={thread.id} className="flex items-start justify-between">
            <DashboardThreadCard thread={thread} />
          </div>
        ))}
      </div>
    </>
  );
}
