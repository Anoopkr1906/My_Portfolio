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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 to-blue-900 py-4 sm:py-6 lg:py-8 px-4">
      <div className="backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-sm sm:max-w-md lg:max-w-lg border border-white/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-2">Contact Me</h2>
        <p className="text-center font-bold text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">I'd love to hear from you! Send an email or leave feedback below.</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-gray-800 font-semibold mb-1 text-sm sm:text-base">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70 text-sm sm:text-base"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1 text-sm sm:text-base">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70 text-sm sm:text-base"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1 text-sm sm:text-base">Your Feedback</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 bg-white/70 text-sm sm:text-base resize-none"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 mt-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-md active:scale-95"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-gray-800 text-center text-lg sm:text-xl lg:text-2xl mt-2">Thank you! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-2 text-sm sm:text-base">Oops! Something went wrong. Try again.</p>
          )}
        </form>
        <div className="mt-6 sm:mt-8 text-center font-semibold text-gray-900 text-sm sm:text-base">
          Or email me directly at{" "}
          <a
            href="mailto:anoopkumar19062006@gmail.com"
            className="text-indigo-700 underline hover:text-indigo-900 break-all sm:break-normal"
          >
            anoopkumar19062006@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
