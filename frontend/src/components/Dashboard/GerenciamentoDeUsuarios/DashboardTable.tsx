import { useEffect, useState } from "react";
import {
  ColumnFiltersState,
  OnChangeFn,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // Assuming Badge component is imported
import { User, columns } from "./utils";

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

interface DashboardTableProps {
  users: User[];
  pageIndex: number;
  columnFilters: ColumnFiltersState;
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
}

export default function DashboardTable({
  users,
  pageIndex,
  columnFilters,
  setColumnFilters,
}: DashboardTableProps) {
  useEffect(() => {
    document.title = "Gerenciamento de Usuários - DSM";
  }, []);

  const [sorting, setSorting] = useState<SortingState>([]);
  //   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {cell.column.id === "role" ? (
                    <div className="flex gap-2">
                      {Array.isArray(cell.getValue() as string[]) ? (
                        (cell.getValue() as string[]).map((role) => (
                          <Badge
                            key={role}
                            className={`text-xs ${getBadgeClass(
                              role as BadgeName
                            )}`}
                          >
                            {role}
                          </Badge>
                        ))
                      ) : (
                        <span>Sem cargos</span>
                      )}
                    </div>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Sem resultados.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
