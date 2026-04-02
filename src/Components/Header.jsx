import React from 'react'
import Navbar from './Navbar'
import houseImg from '../assets/house4.jpg'

const Header = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${houseImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      id="Header"
    >
      {/* Dark Overlay (VERY IMPORTANT for professionalism) */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Navbar />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20 lg:px-32 text-center text-white">
        
        {/* Small Tagline */}
        <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
          Find Your Perfect Home
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          Discover Homes That Match{" "}
          <span className="text-blue-400">Your Dream Lifestyle</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
          Explore premium properties tailored to your taste, comfort, and future.
          We help you find not just a house, but a place to truly call home.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          <a
            href="#project"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </a>

        </div>
      </div>
    </div>
  )
}

export default Header