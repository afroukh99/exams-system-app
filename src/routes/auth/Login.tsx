import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useForm } from "react-hook-form"
import  Form  from "@/components/form/Form";
import { Link } from "react-router-dom";
import FormField from "@/components/form/FormField";
import PasswordField from "@/components/form/PasswordField";
import type { LoginFormValues } from "@/types/form.types";

const Login = () => {

    const methodes = useForm<LoginFormValues>()

    const isSubmitting = methodes.formState.isSubmitting;

    const onSubmit = async(data: LoginFormValues) => {
        console.log("Form data submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submission complete");
        methodes.reset();
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-background">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Connectez-vous à votre compte</CardTitle>
                    <CardDescription>
                        Entrez votre adresse e-mail ci-dessous pour vous connecter à votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Formulaire de connexion */}
                    <Form<LoginFormValues> id="login-form" methodes={methodes}  onSubmit={onSubmit}>
                        <FormField name="email" id="email" label="E-mail" type="email" placeholder="exemple@mail.domaine"/>
                        <PasswordField />
                    </Form>
                    {/* Formulaire de connexion */}
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button disabled={isSubmitting}  form="login-form" type="submit" className="w-full">
                        Se connecter
                    </Button>
                    <Link className="w-full" to={"/signup"}>
                        <Button disabled={isSubmitting} variant="outline" className="w-full">
                            S'inscrire
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
