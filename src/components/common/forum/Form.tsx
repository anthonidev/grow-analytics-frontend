import {
  DefaultValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormProps<TFormValues extends Record<string, any>> = {
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
  children: (
    methods: UseFormReturn<TFormValues>
  ) => React.ReactNode | React.ReactNode[];
  data?: DefaultValues<TFormValues>;
};

export const Form = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
  className,
  data,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    defaultValues: data,
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
      {children(methods)}
    </form>
  );
};
