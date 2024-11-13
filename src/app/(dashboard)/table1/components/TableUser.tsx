"use client";
import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { deleteUser, fetchUsers } from "@/context/slice/userSlice";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { TableProps } from "antd";
import { Button, Form, Popconfirm, Table } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import ModalEdit from "./ModalEdit";

const TableUsers: React.FC = () => {
  const [form] = Form.useForm();
  const { users, count, current_page, loading } = useAppSelector(
    (state) => state.user
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserAccount | null>(null);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const handleDelete = (id: number) => {
    const params = searchParams.toString();
    dispatch(deleteUser(id)).then(() => {
      dispatch(fetchUsers(params));
    });
  };

  useEffect(() => {
    const params = searchParams.toString();
    dispatch(fetchUsers(params));
  }, [dispatch, searchParams]);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: "5%",
      editable: false,
    },
    {
      title: "usuario",
      dataIndex: "usuario",
      width: "10%",
      editable: true,
    },
    {
      title: "correo",
      dataIndex: "correo",
      width: "25%",
      editable: true,
    },
    {
      title: "nombre completo",
      render: (record: UserAccount) =>
        `${record.nombre} ${record.apell_paterno} ${record.apell_materno}`,
      width: "25%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "10%",

      render: (_: unknown, record: UserAccount) =>
        users.length >= 1 ? (
          <div className="flex space-x-2 justify-center items-center">
            <Button
              onClick={() => {
                setSelectedUser(record);
                setIsModalOpen(true);
              }}
              variant="link"
              color="default"
              icon={<PencilIcon />}
              classNames={{
                icon: "h-7 w-7 text-green-500 border p-1 rounded dark:bg-gray-800 dark:border-gray-800",
              }}
            ></Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <TrashIcon className="h-7 w-7 text-red-500 border p-1 rounded dark:bg-gray-800 dark:border-gray-800" />
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  const mergedColumns: TableProps<UserAccount>["columns"] = columns.map(
    (col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: UserAccount) => ({
          record,
          inputType: col.dataIndex === "id" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,

          // editing: isEditing(record),
        }),
      };
    }
  );

  return (
    <>
      <Form form={form} component={false}>
        <Table<UserAccount>
          bordered
          title={() => <Header />}
          loading={loading}
          footer={() => `Total de usuarios: ${count}`}
          dataSource={users}
          columns={mergedColumns}
          rowClassName="editable-row"
          scroll={{ x: 700, y: 800 }}
          pagination={{
            total: count,
            pageSize: 10,
            current: current_page,
            onChange: (page) => {
              let params = searchParams.toString();
              if (params.includes("page="))
                params = params.replace(/page=\d+/, `page=${page}`);
              else if (params) params += `&page=${page}`;
              else params = `page=${page}`;
              dispatch(fetchUsers(params));
            },
          }}
        />
      </Form>
      {selectedUser && (
        <ModalEdit
          user={selectedUser}
          setSelectedUser={setSelectedUser}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default TableUsers;
