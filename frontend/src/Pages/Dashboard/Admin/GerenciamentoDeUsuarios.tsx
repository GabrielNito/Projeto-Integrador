import { useEffect, useState } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";

import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { User } from "@/components/Dashboard/GerenciamentoDeUsuarios/utils";
import DashboardPagination from "@/components/Dashboard/GerenciamentoDeUsuarios/DashboardPagination";
import DashboardTable from "@/components/Dashboard/GerenciamentoDeUsuarios/DashboardTable";
import AvisoMobile from "@/components/Dashboard/GerenciamentoDeUsuarios/AvisoMobile";
import { Input } from "@/components/ui/input";

const API_URL = import.meta.env.VITE_FETCH_URL || "http://localhost:3001";

interface Response {
  data: User[];
  message: string;
}

export default function GerenciamentoDeUsuarios() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [usernameFilter, setUsernameFilter] = useState("");

  async function fetchUsers() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/users/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: Response = await response.json();
      setUsers(result.data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    document.title = "Gerenciamento de Usuários - DSM";
    fetchUsers();
  }, []);

  useEffect(() => {
    setColumnFilters([
      {
        id: "username",
        value: usernameFilter,
      },
    ]);
  }, [usernameFilter]);

  return (
    <>
      <AvisoMobile />

      <DashboardTitle title="Gerenciamento de Usuários" />
      <div className="w-full">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <Input
                placeholder="Filtrar usernames..."
                value={usernameFilter}
                onChange={(e) => setUsernameFilter(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="rounded-md border">
              <DashboardTable
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                pageIndex={pageIndex}
                users={users}
              />
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
              <DashboardPagination
                users={users}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
