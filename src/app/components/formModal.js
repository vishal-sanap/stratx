"use client";

import LeadForm from "./form";

export default function FormModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <LeadForm />
      </div>
    </div>
  );
}
