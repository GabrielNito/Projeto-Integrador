import { ColumnDef, Row, Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Editar from "./Editar";

export type Post = {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  threadId: number;
};

export type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar: string | null;
  badges: string;
  createdPosts: Post[];
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }: { row: Row<User> }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "nickname",
    header: ({ column }: { column: Column<User> }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nickname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<User> }) => (
      <div>{row.getValue("nickname")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: { row: Row<User> }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Cargos",
    cell: ({ row }: { row: Row<User> }) => {
      const role = row.getValue("role") as User["role"];
      return <Badge variant="secondary">{role}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<User> }) => (
      <div
        className={
          row.getValue("status") === "Ativo" ? "text-green-600" : "text-red-600"
        }
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "postCount",
    header: "Posts",
    cell: ({ row }: { row: Row<User> }) => (
      <div>{row.getValue("postCount")}</div>
    ),
  },
  {
    id: "actions",
    header: "Opções",
    enableHiding: false,
    cell: ({ row }: { row: Row<User> }) => {
      const user = row.original;

      return <Editar user={user} />;
    },
  },
];
