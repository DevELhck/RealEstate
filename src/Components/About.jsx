import React from "react";
import house3 from "../assets/house3.jpg"; // adjust path

const About = () => {
  return (
    <section
      id="About"
      className="py-20 px-6 md:px-20 lg:px-32 bg-white"
    >
      {/* Heading (same style as header/contact) */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          About Us
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Passionate About{" "}
          <span className="text-blue-500">Your Dream Home</span>
        </h1>

        <p className="text-gray-500">
          We are committed to delivering exceptional real estate experiences,
          helping you find a place that truly feels like home.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={house3}
            alt="Brand"
            className="w-full ` h-[400px]` object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text + Stats */}
        <div className="w-full md:w-1/2 text-gray-600">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-3xl font-bold text-gray-800">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-800">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-800">20+</p>
              <p className="text-sm">Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-800">25+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 leading-relaxed">
            We are a team of passionate professionals dedicated to delivering
            high-quality real estate solutions. With years of experience and a
            client-first approach, we ensure every project reflects excellence,
            trust, and innovation.
          </p>

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;