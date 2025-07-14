import type { Control } from "react-hook-form";

export type InputFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};