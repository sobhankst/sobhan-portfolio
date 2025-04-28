"use client";
import { ContactFormAction, FormState } from "@/lib/actions/ContactFormAction";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
const initialState: FormState = {
  success: false,
};
const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    ContactFormAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Operation successful!");
    }
  }, [state]);
  return (
    <form
      action={action}
      className="bg-lightGray flex w-full max-w-lg flex-col space-y-3 rounded-lg p-5 shadow-2xl"
    >
      <h2 className="text-center text-xl font-medium">
        Contact <span className="text-lightGreen">Me!</span>
      </h2>
      <div className="flex w-full flex-row gap-2">
        <div className="w-full">
          <input
            type="text"
            name="name"
            className="bg-darkGray w-full rounded-md px-4 py-2.5 outline-none"
            placeholder="Full Name"
          />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-red-500 italic">
              {state.errors.name}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="phone"
            className="bg-darkGray w-full rounded-md px-4 py-2.5 outline-none"
            placeholder="Phone Number"
          />
          {state.errors?.phone && (
            <p className="mt-1 text-xs text-red-500 italic">
              {state.errors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="flex w-full flex-row gap-2">
        <div className="w-full">
          <input
            type="email"
            name="email"
            className="bg-darkGray w-full rounded-md px-4 py-2.5 outline-none"
            placeholder="Email Address"
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-500 italic">
              {state.errors.email}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="subject"
            className="bg-darkGray w-full rounded-md px-4 py-2.5 outline-none"
            placeholder="Email Subject"
          />
          {state.errors?.subject && (
            <p className="mt-1 text-xs text-red-500 italic">
              {state.errors.subject}
            </p>
          )}
        </div>
      </div>
      {/* Text area */}
      <div className="w-full">
        <textarea
          name="msg"
          id="msg"
          rows={4}
          placeholder="Describe your project here...."
          className="bg-darkGray w-full resize-none rounded-md p-4 shadow-xl outline-none"
        ></textarea>
        {state.errors?.msg && (
          <p className="mt-1 text-xs text-red-500 italic">{state.errors.msg}</p>
        )}
      </div>
      <div className="flex w-full justify-center">
        <button
          disabled={isPending}
          type="submit"
          className="bg-lightGreen text-darkGray border-lightGreen shadow-lightGreen hover:text-lightGreen cursor-pointer rounded-full border px-6 py-2.5 font-medium shadow transition-all duration-300 ease-in-out hover:bg-transparent hover:shadow-none"
        >
          {isPending ? "Sending Message" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
