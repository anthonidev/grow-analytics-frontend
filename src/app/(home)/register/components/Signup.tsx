"use client";
import { Form } from "@/components/common/forum";
import { useAppDispatch } from "@/context/hooks";
import { createUser } from "@/context/slice/userSlice";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";

export const validatePassword = (value: string) => {
  if (!value) return true;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return (
    regex.test(value) ||
    "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
  );
};

interface Signup {
  usuario: string;
  correo: string;
  contrasena: string;
  nombre: string;
  apell_paterno: string;
  apell_materno: string;
  tipo_usuario: string;
}

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const redirectHandler = () => {
    push("/login");
  };

  const onSubmit: SubmitHandler<Signup> = async (data) => {
    setLoading(true);
    dispatch(createUser({ user: data, close: redirectHandler })).finally(() =>
      setLoading(false)
    );
  };

  return (
    <Form<Signup> onSubmit={onSubmit} className="flex flex-col px-10 py-4">
      {({ control, register, formState: { errors } }) => (
        <>
          <div className="my-1">
            <label htmlFor="usuario" className="text-xs font-medium ">
              Usuario
            </label>
            <Controller
              name="usuario"
              control={control}
              render={({ field }) => (
                <Input
                  id="usuario"
                  required
                  placeholder="Usuario"
                  {...field}
                  status={errors.usuario ? "error" : ""}
                  prefix={<EnvelopeIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.usuario && (
              <span className="text-red-500 text-xs">
                El usuario es requerido
              </span>
            )}
          </div>

          <div className="my-1">
            <label htmlFor="correo" className="text-xs font-medium ">
              Correo
            </label>
            <Controller
              name="correo"
              control={control}
              render={({ field }) => (
                <Input
                  id="correo"
                  required
                  type="email"
                  placeholder="Correo"
                  {...field}
                  status={errors.correo ? "error" : ""}
                  prefix={<EnvelopeIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.correo && (
              <span className="text-red-500 text-xs">
                El correo es requerido
              </span>
            )}
          </div>

          <div className="my-1">
            <label htmlFor="contrasena" className="text-xs font-medium ">
              Contraseña
            </label>
            <Controller
              name="contrasena"
              control={control}
              rules={{ validate: validatePassword }}
              render={({ field }) => (
                <Input.Password
                  id="contrasena"
                  placeholder="Contraseña"
                  required
                  {...field}
                  status={errors.contrasena ? "error" : ""}
                  prefix={<LockClosedIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.contrasena && (
              <span className="text-red-500 text-xs">
                {errors.contrasena.message}
              </span>
            )}
          </div>

          <div className="my-1">
            <label htmlFor="nombre" className="text-xs font-medium ">
              Nombre
            </label>
            <Controller
              name="nombre"
              control={control}
              render={({ field }) => (
                <Input
                  id="nombre"
                  required
                  placeholder="Nombre"
                  {...field}
                  status={errors.nombre ? "error" : ""}
                  prefix={<EnvelopeIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.nombre && (
              <span className="text-red-500 text-xs">
                El nombre es requerido
              </span>
            )}
          </div>

          <div className="my-1">
            <label htmlFor="apell_paterno" className="text-xs font-medium ">
              Apellido Paterno
            </label>
            <Controller
              name="apell_paterno"
              control={control}
              render={({ field }) => (
                <Input
                  id="apell_paterno"
                  required
                  placeholder="Apellido Paterno"
                  {...field}
                  status={errors.apell_paterno ? "error" : ""}
                  prefix={<EnvelopeIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.apell_paterno && (
              <span className="text-red-500 text-xs">
                El apellido paterno es requerido
              </span>
            )}
          </div>

          <div className="my-1">
            <label htmlFor="apell_materno" className="text-xs font-medium ">
              Apellido Materno
            </label>
            <Controller
              name="apell_materno"
              control={control}
              render={({ field }) => (
                <Input
                  id="apell_materno"
                  required
                  placeholder="Apellido Materno"
                  {...field}
                  status={errors.apell_materno ? "error" : ""}
                  prefix={<EnvelopeIcon className="w-4 h-4" />}
                />
              )}
            />
            {errors.apell_materno && (
              <span className="text-red-500 text-xs">
                El apellido materno es requerido
              </span>
            )}
          </div>

          <input
            {...register("tipo_usuario", { value: "admin" })}
            className="hidden"
          />

          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            icon={<LockClosedIcon className="h-5 w-5" />}
          >
            Sign Up
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignUp;
