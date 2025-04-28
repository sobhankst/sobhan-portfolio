import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  msg: z.string().min(10, "Message should be at least 10 characters"),
});
export type ContactFormData = z.infer<typeof ContactSchema>;
