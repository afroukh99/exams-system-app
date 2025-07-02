import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "@/components/form/Form";
import FormField from "@/components/form/FormField";
import PasswordField from "@/components/form/PasswordField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SignupFormValues } from "@/types/form.types";


const Signup = () => {


    const methodes = useForm<SignupFormValues>();
    const isSubmitting = methodes.formState.isSubmitting;

    const  onSubmit = async(data: SignupFormValues) => {
    // Logique de soumission du formulaire
    console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      methodes.reset();
    }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>
            Remplissez les champs ci-dessous pour créer votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Formulaire d'inscription */}
          <Form<SignupFormValues> methodes={methodes} onSubmit={onSubmit} id="signup-form">
            <FormField
              name="firstname"
              id="firstname"
              label="Prénom"
              type="text"
              placeholder="Jean"
            />
            <FormField
              name="lastname"
              id="lastname"
              label="Nom"
              type="text"
              placeholder="Dupont"
            />
            <FormField
              name="email"
              id="email"
              label="E-mail"
              type="email"
              placeholder="exemple@domaine.com"
            />
            <PasswordField/>
          </Form>
          {/* Formulaire d'inscription */}
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button  disabled={isSubmitting} form="signup-form" type="submit" className="w-full">
            S'inscrire
          </Button>
          <Link className="w-full" to={"/login"}>
            <Button disabled={isSubmitting} variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
