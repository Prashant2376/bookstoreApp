import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-xl text-center">
          Have a question, suggestion, or just want to say hello? Fill out the
          form below and we'll get back to you as soon as possible!
        </p>
        <form className="w-full max-w-lg bg-gray-50 dark:bg-slate-800 rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-slate-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-slate-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-slate-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
