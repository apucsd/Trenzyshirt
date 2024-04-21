import { z } from "zod";

export const CheckOutSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required" }),
  phone: z
    .string()
    .regex(/^\d{11,}$/, { message: "Phone number must be at least 11 digits" })
    .nonempty({ message: "Phone number is required" }),
  address: z.string().nonempty({ message: "Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  state: z.string().nonempty({ message: "State is required" }),
  zipCode: z
    .string()
    .regex(/^\d{4}$/, { message: "ZIP code must be 4 digits" })
    .nonempty({ message: "ZIP code is required" }),
});
export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};
