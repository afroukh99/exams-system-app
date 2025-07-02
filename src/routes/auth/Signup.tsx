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


const Signup = () => {


    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

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
          <Form>
            <FormField
              id="firstname"
              label="Prénom"
              type="text"
              placeholder="Jean"
              register={register}
              error={errors.firstname}
            />
            <FormField
              id="lastname"
              label="Nom"
              type="text"
              placeholder="Dupont"
              register={register}
              error={errors.lastname}
            />
            <FormField
              id="email"
              label="E-mail"
              type="email"
              placeholder="exemple@domaine.com"
              register={register}
              error={errors.email}
            />
            <PasswordField
              register={register}
              error={errors.password}
            />
          </Form>
          {/* Formulaire d'inscription */}
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button disabled={isSubmitting} form="form" type="submit" className="w-full">
            S'inscrire
          </Button>
          <Link className="w-full" to={"/login"}>
            <Button variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
