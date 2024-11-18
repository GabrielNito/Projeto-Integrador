import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Check, X, ArrowRight } from "lucide-react";
import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { useToast } from "@/hooks/use-toast";
// import ThreadPostUser from "@/components/Forum/ThreadPostUser";
// import ThreadPostContent from "@/components/Forum/ThreadPostContent";

interface ThreadData {
  threadId: number;
  title: string;
  posts: {
    id: number;
    avatar: string;
    username: string;
    badges: string[];
    description: string;
    likes: {
      amount: number;
      isLikedByUser: boolean;
    };
    date: string;
  }[];
}

const pendingThreads: ThreadData[] = [
  {
    threadId: 2,
    title: "Inovações em Inteligência Artificial no DSM",
    posts: [
      {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=1",
        username: "ia_enthusiast",
        badges: ["Aluno", "4° semestre"],
        description:
          "Com o avanço da IA, como o curso DSM está se adaptando para incluir as últimas inovações nessa área?",
        likes: { amount: 0, isLikedByUser: false },
        date: "2024-09-20 10:00:00.000000+00",
      },
    ],
  },
  {
    threadId: 3,
    title: "Desafios da Programação Multiplataforma",
    posts: [
      {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=2",
        username: "multi_dev",
        badges: ["Aluno", "5° semestre"],
        description:
          "Quais são os maiores desafios que enfrentamos ao desenvolver para múltiplas plataformas e como o DSM nos prepara para superá-los?",
        likes: { amount: 0, isLikedByUser: false },
        date: "2024-09-21 14:30:00.000000+00",
      },
    ],
  },
];

export default function MensagensAprovadas() {
  const [threads, setThreads] = useState(pendingThreads);
  const [selectedThreads, setSelectedThreads] = useState<number[]>([]);
  const { toast } = useToast();

  const handleSelectThread = (threadId: number) => {
    setSelectedThreads((prev) =>
      prev.includes(threadId)
        ? prev.filter((id) => id !== threadId)
        : [...prev, threadId]
    );
  };

  const handleApproveThreads = () => {
    setThreads((prev) =>
      prev.filter((thread) => !selectedThreads.includes(thread.threadId))
    );
    setSelectedThreads([]);
    toast({
      title: "Threads Approved",
      description: `${selectedThreads.length} thread(s) have been approved.`,
    });
  };

  const handleRejectThreads = () => {
    setThreads((prev) =>
      prev.filter((thread) => !selectedThreads.includes(thread.threadId))
    );
    setSelectedThreads([]);
    toast({
      title: "Threads Rejected",
      description: `${selectedThreads.length} thread(s) have been rejected.`,
      variant: "destructive",
    });
  };

  const handleGoToThread = (threadId: number) => {
    toast({
      title: "Navigate to Thread",
      description: `Navigating to thread ${threadId}`,
    });
  };
  useEffect(() => {
    document.title = "Mensagens Aprovadas - DSM";
  }, []);
  return (
    <>
      <DashboardTitle title="Mensagens Aprovadas" />
      <div className="container mx-auto p-6">
        <Card>
          <CardContent>
            <div className="flex justify-between mb-4 py-6">
              <Button
                onClick={handleApproveThreads}
                disabled={selectedThreads.length === 0}
                className="bg-green-600 hover:bg-green-700"
              >
                <Check className="mr-2 h-4 w-4" /> Approve Selected
              </Button>
              <Button
                onClick={handleRejectThreads}
                disabled={selectedThreads.length === 0}
                variant="destructive"
              >
                <X className="mr-2 h-4 w-4" /> Reject Selected
              </Button>
            </div>
            <ScrollArea className="h-[600px] rounded-md border p-4">
              {threads.map((thread) => (
                <div key={thread.threadId} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`thread-${thread.threadId}`}
                        checked={selectedThreads.includes(thread.threadId)}
                        onCheckedChange={() =>
                          handleSelectThread(thread.threadId)
                        }
                      />
                      <label
                        htmlFor={`thread-${thread.threadId}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {thread.title}
                      </label>
                    </div>
                    <Button
                      onClick={() => handleGoToThread(thread.threadId)}
                      variant="outline"
                      size="sm"
                    >
                      Go to Thread <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <Card className="md:w-full bg-[var(--background)] border-border_gradient">
                    <CardContent className="p-0">
                      <div className="flex max-md:flex-col-reverse">
                        <ThreadPostUser
                          avatar={thread.posts[0].avatar}
                          username={thread.posts[0].username}
                          badges={thread.posts[0].badges}
                          likes={thread.posts[0].likes}
                          date={thread.posts[0].date}
                        />

                        <Separator
                          orientation="vertical"
                          className="h-auto max-md:hidden"
                        />
                        <Separator
                          orientation="horizontal"
                          className="md:hidden"
                        />

                        <ThreadPostContent
                          description={thread.posts[0].description}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
