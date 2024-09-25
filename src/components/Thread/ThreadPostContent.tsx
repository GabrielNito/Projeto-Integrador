interface ThreadPostContentProps {
  description: string;
}

export default function ThreadPostContent({
  description,
}: ThreadPostContentProps) {
  return (
    <div className="flex-1 p-4">
      <p className="text-base opacity-75">{description}</p>
    </div>
  );
}
