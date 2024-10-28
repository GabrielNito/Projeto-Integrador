import { formatDatePost } from "@/utils/formatDatePost";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ThreadPostUserProps {
  avatar: string;
  username: string;
  badges: string[];
  likes: {
    amount: number;
    isLikedByUser: boolean;
  };
  date: string;
}

const badgeStyles: { [key: string]: string } = {
  Coordenador: "bg-blue-900 hover:bg-blue-800 text-white",
  Professor: "bg-blue-700 hover:bg-blue-600 text-white",
  Aluno: "bg-gray-400 hover:bg-gray-300 text-black",
  "1° semestre": "bg-blue-400 hover:bg-blue-300 text-black",
  "2° semestre": "bg-teal-400 hover:bg-teal-300 text-black",
  "3° semestre": "bg-yellow-400 hover:bg-yellow-300 text-black",
  "4° semestre": "bg-orange-400 hover:bg-orange-300 text-black",
  "5° semestre": "bg-red-400 hover:bg-red-300 text-black",
  "6° semestre": "bg-purple-400 hover:bg-purple-300 text-black",
};

type BadgeName = keyof typeof badgeStyles;

const getBadgeClass = (badge: BadgeName) => badgeStyles[badge] || "";

export default function ThreadPostUser({
  avatar,
  username,
  badges,
  likes,
  date,
}: ThreadPostUserProps) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="w-1/4 max-md:w-full min-w-[120px] p-4 flex flex-col items-center justify-between">
      <div className="flex flex-col max-md:flex-row items-center gap-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="max-md:hidden text-sm font-semibold text-center">
          {username}
        </div>

        <div className="max-md:hidden flex flex-wrap justify-center gap-1">
          {badges.map((badge, index) => (
            <Badge key={index} className={`text-xs ${getBadgeClass(badge)}`}>
              {badge}
            </Badge>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-1">
          <div className="text-sm font-semibold text-center">{username}</div>

          <div className="flex flex-wrap justify-center gap-1">
            {badges.map((badge, index) => (
              <Badge key={index} className={`text-xs ${getBadgeClass(badge)}`}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full max-md:justify-evenly justify-center items-center gap-2">
        <p className="text-xs font-semibold tracking-wide leading-none text-nowrap md:mt-[-2px]">
          {formatDatePost(date)}
        </p>

        <Button
          onClick={handleLike}
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
        >
          <Heart
            className={`h-4 w-4 ${
              likes.isLikedByUser || isLiked ? "text-red-500" : ""
            }`}
            fill={likes.isLikedByUser || isLiked ? "rgb(239 68 68)" : "none"}
          />
          <span>{likes.amount}</span>
        </Button>
      </div>
    </div>
  );
}
