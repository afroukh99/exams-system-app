import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Créer un compte</CardTitle>
                    <CardDescription>
                        Remplissez les champs ci-dessous pour créer votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="firstname">Prénom</Label>
                                <Input
                                    id="firstname"
                                    type="text"
                                    placeholder="Jean"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="lastname">Nom</Label>
                                <Input
                                    id="lastname"
                                    type="text"
                                    placeholder="Dupont"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="exemple@domaine.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
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
    )
}

export default Signup
