import type { FormProps } from "@/types/form.types";
import { FormProvider } from "react-hook-form";



const Form = ({ children, id, methodes, onSubmit }: FormProps) => {


    return (
        <FormProvider {...methodes}>
            <form id={id} onSubmit={methodes.handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-6">
                    {children}
                </div>
            </form>
        </FormProvider>
    );
}

export default Form;