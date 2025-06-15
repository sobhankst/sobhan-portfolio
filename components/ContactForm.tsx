"use client";
import { ContactFormAction, FormState } from "@/lib/actions/ContactFormAction";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { LuLoader } from "react-icons/lu";
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
      className="bg-lightGray flex w-full flex-col space-y-3 rounded-lg p-5 shadow-2xl"
    >
      <h2 className="text-center text-4xl font-medium">
        Contact <span className="text-lightGreen">Me!</span>
      </h2>
      <div className="flex w-full flex-col gap-2 lg:flex-row">
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
      <div className="flex w-full flex-col gap-2 lg:flex-row">
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
          className={`flex items-center justify-center gap-2 rounded-full border px-6 py-2.5 font-medium transition-all duration-300 ease-in-out ${
            isPending
              ? "bg-lightGreen text-darkGray border-lightGreen shadow-lightGreen cursor-wait opacity-60"
              : "bg-lightGreen text-darkGray border-lightGreen shadow-lightGreen hover:text-lightGreen cursor-pointer border shadow hover:bg-transparent hover:shadow-none"
          }`}
        >
          {isPending && <LuLoader className="h-4 w-4 animate-spin" />}
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
