"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";

const LeadSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.email("Enter a valid email"),
  country: z.string().min(1, "Select a country"),
  plan: z.enum(["LTWP", "CZIP"], { required_error: "Please select a plan" }),
  message: z.string().optional(),
  source: z.string().optional(),
  recaptchaToken: z.string().min(1, { message: "Please complete the reCAPTCHA" }),
});

export default function LeadForm() {
  const [status, setStatus] = useState({ type: "idle" });
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LeadSchema) });

  const onSubmit = async (data) => {
    try {
      setStatus({ type: "loading" });

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      const body = await res.json();

      if (!res.ok) {
        console.error(body);
        setStatus({ type: "error", message: body?.message || "Failed to send" });
        recaptchaRef.current.reset();
        return;
      }

      setStatus({ type: "success", message: "Thanks — we'll get back to you!" });
      reset();
      recaptchaRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full p-4 bg-white/5 rounded-md"
    >
      {/* Name */}
      <label className="block mb-2">
        <span className="text-sm">Name</span>
        <input
          {...register("name")}
          className="mt-1 w-full p-2 rounded bg-white/5"
        />
        {errors.name && (
          <p className="text-xs text-red-400">{errors.name.message}</p>
        )}
      </label>

      {/* Email */}
      <label className="block mb-2">
        <span className="text-sm">Email</span>
        <input
          {...register("email")}
          className="mt-1 w-full p-2 rounded bg-white/5"
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </label>

      {/* Country */}
      <label className="block mb-2">
        <span className="text-sm">Country</span>
        <select
          {...register("country")}
          className="mt-1 w-full p-2 rounded bg-white/5"
        >
          <option className="bg-gray-900" value="">Select country</option>
          <option className="bg-gray-900" value="Czechia">Czechia</option>
          <option className="bg-gray-900" value="United Kingdom">United Kingdom</option>
          <option className="bg-gray-900" value="Europe">Rest of Europe</option>
          <option className="bg-gray-900" value="Other">Other</option>
        </select>
        {errors.country && (
          <p className="text-xs text-red-400">{errors.country.message}</p>
        )}
      </label>

      {/* Plan */}
      <div className="block mb-2">
        <span className="text-sm">Plan</span>
        <div className="mt-1 flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              {...register("plan")}
              value="LTWP"
              className="mr-2"
            />
            <span>LTWP</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              {...register("plan")}
              value="CZIP"
              className="mr-2"
            />
            <span>CZIP</span>
          </label>
        </div>
        {errors.plan && (
          <p className="text-xs text-red-400">{errors.plan.message}</p>
        )}
      </div>

      {/* Message */}
      <label className="block mb-2">
        <span className="text-sm">Message (optional)</span>
        <textarea
          {...register("message")}
          className="mt-1 w-full p-2 rounded bg-white/5"
          rows={4}
        />
      </label>

      {/* ReCAPTCHA */}
      <div className="mb-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={(token) => setValue("recaptchaToken", token)}
          theme="dark"
        />
        {errors.recaptchaToken && (
          <p className="text-xs text-red-400">{errors.recaptchaToken.message}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-60"
      >
        {status.type === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
      
      {/* Status Messages */}
      <div className="mt-3">
        {status.type === "success" && (
          <p className="text-sm text-green-400">{status.message}</p>
        )}
        {status.type === "error" && (
          <p className="text-sm text-red-400">{status.message}</p>
        )}
      </div>
    </form>
  );
}
