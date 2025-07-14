import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { loginSchema, type LoginFormValues } from "@/schemas/login.schema"
import InputField from "@/components/InputField"

const Login = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Form submitted", data)
    await new Promise((r) => setTimeout(r, 2000))
    form.reset()
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              id="login-form"
              className="flex flex-col gap-6"
            >
              <InputField
                control={form.control}
                name="email"
                label="E-mail"
                type="email"
                placeholder="exemple@mail.domaine"
              />

              <InputField
                control={form.control}
                name="password"
                label="Mot de passe"
                type="password"
                placeholder="Votre mot de passe"
              />

              <Button disabled={form.formState.isSubmitting} type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
          </Form>
        </CardContent>
        {/* Footer avec lien inscription hors formulaire */}
        <CardFooter className="flex-col gap-2 w-full">
          <Link className="w-full" to={"/signup"}>
            <Button variant="outline" className="w-full">
              S'inscrire
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
