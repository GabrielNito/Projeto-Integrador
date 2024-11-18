import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
// import { ExitIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../ModeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { HelpCircle, HomeIcon, LogOut } from "lucide-react";

interface SidebarFooterProps {
  expanded: boolean;
  avatar: string;
  username: string;
  name: string;
  email: string;
}

export default function SidebarFooter({
  expanded,
  avatar,
  username,
  name,
  email,
}: SidebarFooterProps) {
  return (
    <div className="absolute bottom-4 left-0 right-0 px-3 flex flex-col gap-2 justify-center items-center">
      <div
        className={cn(
          "flex w-full items-center gap-3 rounded-lg bg-secondary px-3 py-2",
          !expanded && "hidden"
        )}
      >
        <Avatar className={cn("h-16 w-16", !expanded && "hidden")}>
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "flex flex-col overflow-hidden transition-all duration-300",
            expanded ? "w-full opacity-100" : "w-0 opacity-0"
          )}
        >
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs text-muted-foreground truncate">
            {email}
          </span>
        </div>
      </div>
      <Separator className={cn("mt-2", !expanded && "hidden")} />
      <div
        className={cn(
          "flex justify-between items-center gap-2",
          !expanded && "hidden"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
              >
                <HomeIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-muted text-foreground">
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => {}}>
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-muted text-foreground">
              <p>Ajuda</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => {}}>
                <LogOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-muted text-foreground">
              <p>Sair</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ModeToggle />
      </div>
    </div>
  );
}
