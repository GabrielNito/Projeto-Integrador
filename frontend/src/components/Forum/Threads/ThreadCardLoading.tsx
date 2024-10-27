import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { HeartIcon, MessageCircleIcon } from "lucide-react";

export default function ThreadCardLoading() {
  return (
    <Card className="w-full bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-[250px]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[90px] rounded-lg" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[200px]" />
        <div className="space-y-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <HeartIcon className="h-4 w-4 mr-2" />
            <Skeleton className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircleIcon className="h-4 w-4 mr-2" />
            <Skeleton className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
