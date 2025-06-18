import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("pending");
    emailjs
      .sendForm(
        "service_ubh92th",   // Replace with your EmailJS service ID
        "template_xttzyrt",  // Replace with your EmailJS template ID
        form.current,
        "nyCTf1TNBk8zmta8o"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 to-blue-900 py-8">
      <div className="backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-lg border border-white/30">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-2">Contact Me</h2>
        <p className="text-center font-bold text-gray-800 mb-6">I'd love to hear from you! Send an email or leave feedback below.</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Your Feedback</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-lg transition-all duration-200 shadow-md active:scale-95"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-gray-800 text-center text-2xl mt-2">Thank you! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-2">Oops! Something went wrong. Try again.</p>
          )}
        </form>
        <div className="mt-8 text-center font-semibold text-gray-900 text-md">
          Or email me directly at{" "}
          <a
            href="mailto:anoopkumar19062006@email.com"
            className="text-indigo-700 underline hover:text-indigo-900"
          >
            anoopkumar19062006@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
