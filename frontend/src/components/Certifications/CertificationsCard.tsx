import { useState } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

interface CertificationsCardProps {
  type: string;
  title: string;
  subjects: string[];
}

export default function CertificationsCard({
  type,
  title,
  subjects,
}: CertificationsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMicro = type === "Microcertificação";

  const badgeVariant = isMicro
    ? "bg-[rgba(4,198,174,1)] text-white hover:bg-[rgba(4,198,174,0.75)] dark:bg-[rgba(4,198,174,0.5)] dark:text-white dark:hover:bg-[rgba(4,198,174,0.3)]"
    : "bg-[rgba(37,62,142,1)] text-white dark:bg-[rgba(37,62,142,0.75)] dark:hover:bg-[rgba(37,62,142,0.7)]";
  const dotColor = isMicro
    ? "bg-[rgba(4,198,174,1)]"
    : "bg-[rgba(37,62,142,1)]";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displaySubjects = isExpanded
    ? subjects
    : subjects.length <= 3
    ? subjects
    : subjects.slice(0, 2);
  const needsExpansion = subjects.length > 3;

  return (
    <Card className="w-full p-6 transition-all duration-300 shadow-md select-none group rounded-xl bg-muted/50 dark:bg-muted/50">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <Badge
          className={`flex gap-1 items-center mb-2 w-fit p-1 pr-2 ${badgeVariant}`}
        >
          <BadgeCheck size={16} />
          {type}
        </Badge>
      </CardHeader>
      <CardContent className="p-0 space-y-2">
        {displaySubjects.map((subject, index) => (
          <div key={index} className="flex items-center h-8 gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <p className="text-muted-foreground">{subject}</p>
          </div>
        ))}

        {needsExpansion && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpand}
            className="flex items-center justify-center w-full h-8 gap-1 leading-7 text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? (
              <>
                <span>Mostrar menos</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Expanda para mais</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
