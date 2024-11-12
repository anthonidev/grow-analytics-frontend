"use client";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Form } from "@/components/common/forum";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";

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
  const [signInClicked, setSignInClicked] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Signup> = async (data) => {
    console.log(data);
  };
  return (
    <Form<Signup>
      onSubmit={onSubmit}
      className="flex flex-col space-y-5  p-10 pb-20"
    >
      {({ register, watch }) => (
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

          {error && (
            <p className="rounded-md border-x-4  border-red-500 bg-rose-50 py-2 text-center text-xs font-bold text-red-500">
              {error}
            </p>
          )}

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            icon={<LockClosedIcon className="h-5 w-5" />}
            loading={signInClicked}
          >
            Sign Up
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignUp;
