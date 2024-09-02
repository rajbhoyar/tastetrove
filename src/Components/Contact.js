import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-2">Contact Us</h1>
        <p className="text-2xl">We’re here to help you!</p>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you have any questions or need assistance, please feel free to
            reach out to us. We are here to help you with any concerns or
            feedback you may have.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <ul className="text-lg text-gray-700">
              <li className="mb-4">
                <span className="font-semibold">Email:</span>{" "}
                support@example.com
              </li>
              <li className="mb-4">
                <span className="font-semibold">Phone:</span> +1 (800) 123-4567
              </li>
              <li className="mb-4">
                <span className="font-semibold">Address:</span> 1234 Elm Street,
                Suite 567, City, State, ZIP
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 [App Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
