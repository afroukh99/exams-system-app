import { z } from "zod";


export const signupSchema = z.object({
    firstName: z.string().min(1, "Le prénom est requis").max(50, "Le prénom ne peut pas dépasser 50 caractères"),
    lastName: z.string().min(1, "Le nom de famille est requis").max(50, "Le nom de famille ne peut pas dépasser 50 caractères"),
    email: z.string().email("Email invalide"),
    password: z.string().min(8, "Minimum 8 caractères").max(64, "Maximum 64 caractères")
})


export type SignupFormValues = z.infer<typeof signupSchema>;