import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupFormValues } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Lock, Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

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
       <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Create your teacher account to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Your full name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="teacher@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>    
  );
};

export default Signup;
