import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ThreadPostUser from "./ThreadPostUser";
import ThreadPostContent from "./ThreadPostContent";

interface ThreadData {
  avatar: string;
  username: string;
  badges: string[];
  description: string;
  likes: {
    amount: number;
    isLikedByUser: boolean;
  };
  date: string;
}

interface ThreadPostProps {
  data: ThreadData;
}

export default function ThreadPost({ data }: ThreadPostProps) {
  return (
    <Card className="md:w-2/3 bg-[var(--background)] border-border_gradient">
      <CardContent className="p-0">
        <div className="flex max-md:flex-col-reverse">
          <ThreadPostUser
            avatar={data.avatar}
            username={data.username}
            badges={data.badges}
            likes={data.likes}
            date={data.date}
          />

          <Separator orientation="vertical" className="h-auto max-md:hidden" />
          <Separator orientation="horizontal" className="md:hidden" />

          <ThreadPostContent description={data.description} />
        </div>
      </CardContent>
    </Card>
  );
}
