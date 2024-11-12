"use client";
import { Form } from "@/components/common/forum";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "antd";
import { SubmitHandler } from "react-hook-form";

interface Signup {
  correo: string;
  contrasena: string;
  usuario: string;
  nombre: string;
  apell_paterno: string;
  apell_materno: string;
  tipo_usuario: string;
}

const SignUp = () => {
  const onSubmit: SubmitHandler<Signup> = async (data) => {
    console.log(data);
  };
  return (
    <Form<Signup>
      onSubmit={onSubmit}
      className="flex flex-col space-y-5  p-10 pb-20"
    >
      {({ register }) => (
        <>
          <Input
            size="large"
            required
            placeholder="usuario"
            {...register("usuario", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />
          <Input
            size="large"
            required
            type="email"
            placeholder="correo"
            {...register("correo", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />
          <Input.Password
            size="large"
            placeholder="password"
            required
            {...register("contrasena", {
              required: true,
              maxLength: 100,
            })}
            prefix={<LockClosedIcon className="w-4 h-4" />}
          />
          <Input
            size="large"
            required
            placeholder="nombre"
            {...register("nombre", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />
          <Input
            size="large"
            required
            placeholder="apell_paterno"
            {...register("apell_paterno", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />
          <Input
            size="large"
            required
            placeholder="apell_materno"
            {...register("apell_materno", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />
          <Input
            size="large"
            required
            placeholder="tipo_usuario"
            {...register("tipo_usuario", {
              required: true,
              maxLength: 100,
            })}
            prefix={<EnvelopeIcon className="w-4 h-4" />}
          />

          <Button
            type="primary"
            htmlType="submit"
            size="large"
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
