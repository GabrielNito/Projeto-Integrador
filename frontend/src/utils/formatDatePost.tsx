export function formatDatePost(dateString: string): string {
  const date: Date = new Date(dateString);
  const now: Date = new Date();
  const diff: number = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) {
    return `${diff} second${diff !== 1 ? "s" : ""} ago`;
  } else if (diff < 3600) {
    const minutes: number = Math.floor(diff / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diff < 86400) {
    const hours: number = Math.floor(diff / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diff < 604800) {
    const days: number = Math.floor(diff / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join(".");
  }
}
