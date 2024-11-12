import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";

type Props<T> = {
  loading: boolean;
  data: T[];
  topContent: JSX.Element;
  headerColumns: TableColumns[];
  children: (item: T) => JSX.Element;
  emptyText?: string;
  bottomContent?: JSX.Element;
};

const TableTemplate = <T,>({
  loading,
  data,
  topContent,
  headerColumns,
  children,
  bottomContent,
  emptyText,
}: Props<T>) => {
  return (
    <Table
      aria-label="Table"
      topContent={topContent}
      bottomContent={bottomContent}
      isStriped
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={data}
        isLoading={loading}
        loadingContent={
          <div className="h-full w-full flex justify-center items-center bg-gray-800 opacity-80">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-gray-100" />
          </div>
        }
        emptyContent={
          <div className="flex flex-col items-center justify-center space-y-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-center">{emptyText}</p>
          </div>
        }
      >
        {children}
      </TableBody>
    </Table>
  );
};
export default TableTemplate;
