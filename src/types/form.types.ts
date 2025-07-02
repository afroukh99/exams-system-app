import type React from "react"
import type {  FieldValues, UseFormReturn } from "react-hook-form"

export type FormFieldProps = {
    label : string,
    id : string,
    name : string,
    type : string,
    placeholder? : string,
    children ?: React.ReactNode
}


export interface FormProps  {
    id : string
    className ?: string
    children ?: React.ReactNode
    onSubmit: (data: LoginFormValues | SignupFormValues) => Promise<void>
    methodes : UseFormReturn<LoginFormValues, any, LoginFormValues>
}


export type LoginFormValues = {
    email: string
    password: string
}

export type SignupFormValues = {
    firstName: string
    lastName: string
    email: string
    password: string
}