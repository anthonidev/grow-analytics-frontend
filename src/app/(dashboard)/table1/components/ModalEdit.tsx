import { Form } from "@/components/common/forum";
import { useAppDispatch } from "@/context/hooks";
import { updateUser } from "@/context/slice/userSlice";
import { Button, Input, Modal } from "antd";
import React, { Dispatch } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  user: UserAccount;
  isModalOpen: boolean;
  setSelectedUser: Dispatch<React.SetStateAction<UserAccount | null>>;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const ModalEdit = ({
  user,
  isModalOpen,
  setIsModalOpen,
  setSelectedUser,
}: Props) => {
  const handleCancel = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  const dispatch = useAppDispatch();
  const detectChanges = (user: UserAccount, data: EditUser) => {
    let changes = false;
    for (const key in data) {
      if (data[key as keyof EditUser] !== user[key as keyof UserAccount]) {
        changes = true;
        break;
      }
    }
    return changes;
  };

  const onSubmit: SubmitHandler<EditUser> = async (data) => {
    if (!detectChanges(user, data)) {
      toast.info("No se detectaron cambios.");
      return;
    }
    dispatch(
      updateUser({
        id: user.id,
        user: data,
        close: handleCancel,
      })
    );
  };

  return (
    <Modal
      title={`Editar usuario ${user.usuario}`}
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleCancel}
      okText="Cancelar"
      okType="text"
    >
      <Form<EditUser>
        onSubmit={onSubmit}
        data={{
          correo: user.correo,
          usuario: user.usuario,
          nombre: user.nombre,
          apell_paterno: user.apell_paterno,
          apell_materno: user.apell_materno,
        }}
      >
        {({ control }) => (
          <>
            <div className="grid grid-cols-1 gap-4">
              <Controller
                name="correo"
                control={control}
                defaultValue={user.correo}
                render={({ field }) => (
                  <div>
                    <label>Email</label>
                    <Input
                      size="large"
                      required
                      type="email"
                      placeholder="email"
                      defaultValue={user.correo}
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="usuario"
                defaultValue={user.usuario}
                control={control}
                render={({ field }) => (
                  <div>
                    <label>Usuario</label>
                    <Input
                      size="large"
                      required
                      placeholder="usuario"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="nombre"
                defaultValue={user.nombre}
                control={control}
                render={({ field }) => (
                  <div>
                    <label>Nombre</label>
                    <Input
                      size="large"
                      required
                      placeholder="nombre"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="apell_paterno"
                defaultValue={user.apell_paterno}
                control={control}
                render={({ field }) => (
                  <div>
                    <label>Apellido Paterno</label>
                    <Input
                      size="large"
                      required
                      placeholder="apellido paterno"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="apell_materno"
                control={control}
                defaultValue={user.apell_materno}
                render={({ field }) => (
                  <div>
                    <label>Apellido Materno</label>
                    <Input
                      size="large"
                      required
                      placeholder="apellido materno"
                      {...field}
                    />
                  </div>
                )}
              />
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default ModalEdit;
