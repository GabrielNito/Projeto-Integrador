import { useEffect, useState } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  columns,
  User,
} from "@/components/Dashboard/GerenciamentoDeUsuarios/utils";
import DashboardPagination from "@/components/Dashboard/GerenciamentoDeUsuarios/DashboardPagination";
import DashboardTable from "@/components/Dashboard/GerenciamentoDeUsuarios/DashboardTable";
import AvisoMobile from "@/components/Dashboard/GerenciamentoDeUsuarios/AvisoMobile";

const users: User[] = [
  {
    id: "4c0eccf0",
    name: "John Moore",
    nickname: "john_moore",
    email: "john_moore@email.com",
    role: ["Professor"],
    status: "Ativo",
    postCount: 101,
  },
  {
    id: "6a280147",
    name: "Anna Johnson",
    nickname: "anna_johnson",
    email: "anna_johnson@mail.com",
    role: [],
    status: "Ativo",
    postCount: 58,
  },
  {
    id: "77c45294",
    name: "Jane Moore",
    nickname: "jane_moore",
    email: "jane_moore@example.com",
    role: ["Aluno", "1° semestre"],
    status: "Suspenso",
    postCount: 169,
  },
  {
    id: "453b5146",
    name: "Jane Smith",
    nickname: "jane_smith",
    email: "jane_smith@email.com",
    role: ["Aluno"],
    status: "Ativo",
    postCount: 120,
  },
  {
    id: "500762a7",
    name: "Jane Wilson",
    nickname: "jane_wilson",
    email: "jane_wilson@mail.com",
    role: ["Aluno", "4° semestre"],
    status: "Suspenso",
    postCount: 142,
  },
  {
    id: "a80a0014",
    name: "Jane Miller",
    nickname: "jane_miller",
    email: "jane_miller@example.com",
    role: ["Aluno", "2° semestre"],
    status: "Ativo",
    postCount: 94,
  },
  {
    id: "37f34acd",
    name: "Jane Clark",
    nickname: "jane_clark",
    email: "jane_clark@example.com",
    role: ["Aluno", "1° semestre"],
    status: "Ativo",
    postCount: 29,
  },
  {
    id: "7536b9a4",
    name: "Sam Johnson",
    nickname: "sam_johnson",
    email: "sam_johnson@email.com",
    role: ["Aluno", "6° semestre"],
    status: "Suspenso",
    postCount: 113,
  },
  {
    id: "3f3cbbca",
    name: "Jane Clark",
    nickname: "jane_clark",
    email: "jane_clark@example.com",
    role: ["Aluno", "5° semestre"],
    status: "Suspenso",
    postCount: 111,
  },
  {
    id: "84fda7cd",
    name: "Sam Clark",
    nickname: "sam_clark",
    email: "sam_clark@mail.com",
    role: ["Coordenador", "Professor"],
    status: "Ativo",
    postCount: 139,
  },
  {
    id: "abc12345",
    name: "Tom Lee",
    nickname: "tom_lee",
    email: "tom_lee@mail.com",
    role: ["Aluno", "1° semestre"],
    status: "Ativo",
    postCount: 72,
  },
  {
    id: "def67890",
    name: "Emily Davis",
    nickname: "emily_davis",
    email: "emily_davis@example.com",
    role: ["Professor"],
    status: "Ativo",
    postCount: 203,
  },
  {
    id: "ghi54321",
    name: "Michael Brown",
    nickname: "michael_brown",
    email: "michael_brown@mail.com",
    role: ["Aluno", "2° semestre"],
    status: "Ativo",
    postCount: 47,
  },
  {
    id: "jkl09876",
    name: "Sarah Wilson",
    nickname: "sarah_wilson",
    email: "sarah_wilson@mail.com",
    role: ["Aluno", "2° semestre"],
    status: "Suspenso",
    postCount: 150,
  },
  {
    id: "mno56789",
    name: "David Smith",
    nickname: "david_smith",
    email: "david_smith@example.com",
    role: ["Aluno", "4° semestre"],
    status: "Ativo",
    postCount: 89,
  },
];

export default function GerenciamentoDeUsuarios() {
  useEffect(() => {
    document.title = "Gerenciamento de Usuários - DSM";
  }, []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pageIndex, setPageIndex] = useState(0);

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageSize: 10,
        pageIndex,
      },
    },
  });

  return (
    <div className="flex">
      <Sidebar active="/dashboard/gerenciamento-de-usuarios" />
      <DashboardWrapper>
        <AvisoMobile />
        <DashboardTitle title="Gerenciamento de Usuários" />
        <div className="w-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filtrar nicknames..."
              value={
                (table.getColumn("nickname")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("nickname")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Colunas <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
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
        </div>
      </DashboardWrapper>
    </div>
  );
}
