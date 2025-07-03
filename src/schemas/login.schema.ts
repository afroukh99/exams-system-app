import { z } from "zod";


export const loginSchema = z.object({
    email : z.string().email("Email invalide"),
    password : z.string().min(8, "Minimum 8 caractères").max(64, "Maximum 64 caractères")
}) 

export type LoginFormValues = z.infer<typeof loginSchema>