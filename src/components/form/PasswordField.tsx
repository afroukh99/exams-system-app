import { Label } from "@radix-ui/react-label"
import FormField from "./FormField"



const PasswordField = () => {

    return (
        <FormField name="password" id="password" label="Password" type="password" >
            <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                    Mot de passe oublié ?
                </a>
            </div>
        </FormField>
    )
} 

export  default PasswordField;