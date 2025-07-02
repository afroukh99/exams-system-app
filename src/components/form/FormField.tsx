import type { FormFieldProps } from "@/types/form.types";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import {  useFormContext } from "react-hook-form";

const FormField = ({ label,name ,id, type, placeholder, children }: FormFieldProps) => {

    const { register , formState : {errors} } = useFormContext();
    return (
        <div className="grid gap-2">
            {
                children ? (children)
                    : (
                        <Label htmlFor={id}>{label}</Label>
                    )
            }
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
        </div>
    );
}

export default FormField;