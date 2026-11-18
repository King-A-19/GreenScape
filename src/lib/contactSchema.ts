
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name (at least 2 characters)."),

  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),

  service: z
    .string()
    .min(1, "Please select a service."),

  message: z
    .string()
    .min(10, "Please provide a little more detail (at least 10 characters)."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
