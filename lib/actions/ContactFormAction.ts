"use server";

import { resend } from "../email/resend";
import { ContactFormData, ContactSchema } from "../zod/ContactSchema";

export interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}
export const ContactFormAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const rawData: ContactFormData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    msg: formData.get("msg") as string,
  };

  const result = ContactSchema.safeParse(rawData);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }
  try {
    const res = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sobhan.kst@gmail.com"], // ✅ your email here
      subject: `New Message: ${result.data.subject}`,
      replyTo: result.data.email, // ✅ user's email here
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
              <h2>📩 New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${result.data.name}</p>
              <p><strong>Email:</strong> ${result.data.email}</p>
              <p><strong>Phone:</strong> ${result.data.phone}</p>
              <p><strong>Subject:</strong> ${result.data.subject}</p>
              <p><strong>Message:</strong><br/>${result.data.msg.replace(/\n/g, "<br/>")}</p>
            </div>
          `,
    });
    if (res.error) {
      return { success: false, message: "Message send failed" };
    }
    return { success: true, message: "Message send successfully" };
  } catch (err) {
    return {
      success: false,
      errors: { send: ["failed to send email", String(err)] },
    };
  }
};
