import { FormProvider } from "react-hook-form";
import type { FormProps } from "@/types/form.types";
import type { FieldValues } from "react-hook-form";

const Form = <T extends FieldValues>({ children, id, onSubmit, methodes }: FormProps<T>) => {
  return (
    <FormProvider {...methodes}>
      <form id={id} onSubmit={methodes.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">{children}</div>
      </form>
    </FormProvider>
  );
};

export default Form;
