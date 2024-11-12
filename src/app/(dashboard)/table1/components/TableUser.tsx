"use client";
import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { fetchUsers } from "@/context/slice/userSlice";
import type { TableProps } from "antd";
import { Form, Table } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Header } from "./Header";

const TableUsers: React.FC = () => {
  const [form] = Form.useForm();
  const { users, count, current_page, loading } = useAppSelector(
    (state) => state.user
  );

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

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
      width: "40%",
      editable: true,
    },
    // {
    //   title: "operation",
    //   dataIndex: "operation",
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   render: (_: any, record: UserAccount) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <span>
    //         <Typography.Link
    //           onClick={() => save(record.key)}
    //           style={{ marginInlineEnd: 8 }}
    //         >
    //           Save
    //         </Typography.Link>
    //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
    //           <a>Cancel</a>
    //         </Popconfirm>
    //       </span>
    //     ) : (
    //       <div className="flex space-x-2">
    //         <Typography.Link
    //           disabled={editingKey !== ""}
    //           onClick={() => edit(record)}
    //         >
    //           Edit
    //         </Typography.Link>
    //         <Typography.Link
    //           disabled={editingKey !== ""}
    //           onClick={() => edit(record)}
    //         >
    //           Edit
    //         </Typography.Link>
    //       </div>
    //     );
    //   },
    // },
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
    <Form form={form} component={false}>
      <Table<UserAccount>
        bordered
        title={() => <Header />}
        loading={loading}
        footer={() => `Total de usuarios: ${count}`}
        dataSource={users}
        columns={mergedColumns}
        rowClassName="editable-row"
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
  );
};

export default TableUsers;
