import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ThreadPostLoading() {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-[18ch] h-4" />
                <Skeleton className="w-[12ch] h-5 rounded-lg" />
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              <Skeleton className="w-[9ch] h-4" />
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Skeleton className="w-[50ch] h-4" />
          <Skeleton className="w-[55ch] h-4" />
          <Skeleton className="w-[30ch] h-4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="w-[6ch] h-6" />
        </CardFooter>
      </Card>
    </>
  );
}
