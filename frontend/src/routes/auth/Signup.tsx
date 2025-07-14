import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupFormValues } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/InputField";

const Signup = () => {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Form submitted", data);
    await new Promise((r) => setTimeout(r, 2000));
    form.reset();
  };

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
          <Form {...form}>
          {/* Formulaire d'inscription */}
            <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <InputField
                control={form.control}
                name="firstName"
                label="Prénom"
                placeholder="ex : Ali"
                type="text"
              />
              <InputField
                control={form.control}
                name="lastName"
                label="Nom"
                placeholder="ex : Dupont"
                type="text"
              />
              <InputField
                control={form.control}
                name="email"
                label="E-mail"
                placeholder="exemple@mail.domaine"
                type="email"
              />
              <InputField
                control={form.control}
                name="password"
                label="Mot de passe"
                placeholder="Votre mot de passe"
                type="password"
              />
              <Button disabled={form.formState.isSubmitting} form="signup-form" type="submit" className="w-full">
                S'inscrire
              </Button>
            </form>
          {/* Formulaire d'inscription */}
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link className="w-full" to={"/login"}>
            <Button disabled={form.formState.isSubmitting} variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
