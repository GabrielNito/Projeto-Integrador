import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface DeveloperInfo {
  name: string;
  role: string;
  avatarUrl?: string;
  github?: string;
  linkedIn?: string;
}

export default function Footer() {
  const developers: DeveloperInfo[] = [
    {
      name: "Caique Moreira",
      role: "Back-End Developer",
      avatarUrl: "https://avatars.githubusercontent.com/u/87544342?v=4",
      github: "https://github.com/caiquemx",
      linkedIn: "https://www.linkedin.com/in/...",
    },
    {
      name: "Gabriel Nito",
      role: "Front-End Developer",
      avatarUrl: "https://avatars.githubusercontent.com/u/132837450?v=4",
      github: "https://github.com/gabrielnito",
      linkedIn: "https://www.linkedin.com/in/gabrielnito/",
    },
    {
      name: "Nicolas Gabriel",
      role: "Scrum Master",
      avatarUrl: "https://avatars.githubusercontent.com/u/34173655?v=4",
      github: "https://github.com/nicolasgghg",
      linkedIn: "https://www.linkedin.com/in/...",
    },
  ];

  return (
    <footer className="py-6 border-t md:py-8">
      <div className="container flex flex-col items-center justify-center mx-auto text-center">
        <p className="p-4 mb-2 text-sm text-muted-foreground">
          Feito por{" "}
          {developers.map((dev, index) => (
            <span key={dev.name} className="text-start">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0">
                    {dev.name}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={dev.avatarUrl || "/placeholder.svg"} />
                      <AvatarFallback>{dev.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{dev.name}</h4>

                      <p className="text-sm text-muted-foreground">
                        {dev.role}
                      </p>

                      <div className="flex items-center space-x-4">
                        <Button variant="link" className="p-0" asChild>
                          <a
                            href={dev.linkedIn}
                            target="_blank"
                            className="text-xs text-muted-foreground hover:underline"
                          >
                            LinkedIn <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                        <Button variant="link" className="p-0" asChild>
                          <a
                            href={dev.github}
                            target="_blank"
                            className="text-xs text-muted-foreground hover:underline"
                          >
                            GitHub <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {index == developers.length - 1
                ? ""
                : index == developers.length - 2
                ? " e "
                : ", "}
            </span>
          ))}
        </p>
        {/* <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fatec. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}
