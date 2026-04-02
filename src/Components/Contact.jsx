import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          Get In Touch
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Let’s Build Something{" "}
          <span className="text-blue-500">Amazing Together</span>
        </h1>

        <p className="text-gray-500">
          Have a project in mind or looking for your dream property? Reach out to us and let’s make it happen.
        </p>
      </div>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <p className="text-gray-500 mb-6">
            We’re here to help you find the perfect home or answer any questions you may have.
          </p>

          <div className="space-y-4 text-gray-600">
            <p>📍 Location: Lagos, Nigeria</p>
            <p>📞 Phone: +234 123 456 7890</p>
            <p>📧 Email: contact@realestate.com</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-5">
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;