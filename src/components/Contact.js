import React, { useRef } from "react";
import { sendForm } from "emailjs-com";
import Footer from "../app/Footer";
export default function Contact() {
  const formRef = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await sendForm(
        "service_5cg3ufi",
        "template_jzieco4",
        formRef.current,
        "7OVvTqs_O94j5hOwB"
      );
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send message.");
    }
  };
  return (
    <>
      <section className="py-4">
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-50 mb-2">
              Contact
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
          <div className="max-w-xl mx-auto p-6 bg-gray-300 rounded-lg shadow-lg mt-10   dark:bg-zinc-50">
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-md dark:border-black"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full p-3 border rounded-md dark:border-black"
              />
              <input
                type="mobile"
                name="user_mobile"
                placeholder="Mobile Number"
                required
                className="w-full p-3 border rounded-md dark:border-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 border rounded-md dark:border-black"
              />
              <button className="buttons">Send</button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
