import { object, string } from "zod";
export const RegisterSchema = object({
  name: string().min(4, "Name must be more than 4 characters"),
  email: string().email("Invalid email"),
  password: string()
    .min(5, "Password must be more 5 characters")
    .max(32, "Password must be less than 32 charachters"),
  Confirmpassword: string()
    .min(5, "Confirm Password must be more 5 characters")
    .max(32, "Confirm Password must be less than 32 charachters"),
}).refine((data) => data.password === data.Confirmpassword, {
  message: "Password does not match",
  path: ["Confirmpassword"],
});

export const SignInSchema = object({
  email: string().email("Invalid Email"),
  password: string()
    .min(5, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
