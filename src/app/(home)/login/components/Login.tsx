"use client";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "@/components/common/forum";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";

interface Login {
  email: string;
  password: string;
}

const Login = () => {
  const [signInClicked, setSignInClicked] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Login> = async (data) => {
    setSignInClicked(true);
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (res?.ok) {
        router.push("/");
      } else if (res?.error) {
        setError(res.error);
        setSignInClicked(false);
      }
    } catch (error) {
      console.error("Error en el login:", error);
      setError("Error en el login.");
      setSignInClicked(false);
    }
  };
  return (
    <Form<Login> onSubmit={onSubmit} className="flex flex-col space-y-5  p-10 ">
      {({ watch, control }) => (
        <>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                size="large"
                required
                type="email"
                placeholder="email"
                {...field}
                prefix={<EnvelopeIcon className="w-4 h-4" />}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                size="large"
                placeholder="password"
                required
                {...field}
                prefix={<LockClosedIcon className="w-4 h-4" />}
              />
            )}
          />

          {error && (
            <p className="rounded-md border-x-4  border-red-500 bg-rose-50 py-2 text-center text-xs font-bold text-red-500">
              {error}
            </p>
          )}

          <Button
            type="primary"
            disabled={!watch("email") || !watch("password")}
            htmlType="submit"
            size="large"
            icon={<LockClosedIcon className="h-5 w-5" />}
            loading={signInClicked}
          >
            Login
          </Button>

          <div className="flex flex-col space-y-2 text-xs text-center text-gray-500">
            <span>USUARIO DE PRUEBA</span>
            <span>correo: admin@gmail.com</span>
            <span>contraseña: 123456</span>
          </div>
        </>
      )}
    </Form>
  );
};

export default Login;
