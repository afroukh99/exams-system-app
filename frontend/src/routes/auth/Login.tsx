import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Google from "@/components/ui/icons/Google";
import { Mail, Lock } from "lucide-react"


const Login = () => {
    return (
        <div className="w-screen min-h-screen flex justify-center items-center bg-[#F8FAFC] p-8">
            <Card className="w-[500px] p-4">
                <CardHeader className="font-IBM">
                    <CardTitle className="text-center text-foreground text-2xl sm:text-3xl">
                        Welcome to
                        <span className="text-primary!"> E-QUIZ</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="font-inter">
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 bg-[#F1F5F9] p-2 rounded-sm">
                                <Mail size={20} />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="flex-1"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center gap-3 bg-[#F1F5F9] p-2 rounded-sm">
                                    <Lock size={20}/>
                                    <input className="flex-1" id="password" type="password" required placeholder="your password" />
                                </div>
                                <a href="" className="ml-auto text-xs text-secondary font-bold underline">Forgot password ?</a>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-32 mr-auto">
                        Login
                    </Button>
                    <div className="flex items-center w-full">
                        <hr className="grow border-t border-gray-300 mr-2" />
                        <span className="text-sm text-foreground">OR</span>
                        <hr className="grow border-t border-gray-300 ml-2" />
                    </div>
                    <Button variant="outline" className="w-full">
                        <Google h={100} w={100}/>
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;