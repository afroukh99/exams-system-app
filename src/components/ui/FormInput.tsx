import { Label } from "@radix-ui/react-label"
import { Input } from "./input"

type FormInputProps = {
  id: string
  label: string
  type?: string
  placeholder?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const FormInput = ({ id, label, type = "text", placeholder, ...rest }: FormInputProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        {...rest} 
      />
    </div>
  )
}

export default FormInput
