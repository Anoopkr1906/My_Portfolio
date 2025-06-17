import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ubh92th",
        "template_xttzyrt",
        form.current,
        "nyCTf1TNBk8zmta8o"
      )
      .then(
        () => setSent(true),
        (error) => alert("Failed to send: " + error.text)
      );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="bg-orange-200 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
        {sent ? (
          <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border p-2 rounded bg-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border p-2 rounded bg-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border p-2 rounded bg-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full "
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;