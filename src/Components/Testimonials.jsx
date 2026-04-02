import React from "react";
import user1 from "./../assets/User1.png";
import user2 from "./../assets/User2.png";
import user3 from "./../assets/User3.png";
import user4 from "./../assets/User4.png";

const testimonialsData = [
  {
    img: user1,
    name: "John Doe",
    text: "Great service and amazing properties!",
  },
  {
    img: user2,
    name: "Jane Smith",
    text: "Highly recommend for anyone looking for a new home.",
  },
  {
    img: user3,
    name: "Emily Johnson",
    text: "Professional and attentive to our needs.",
  },
  {
    img: user4,
    name: "Michael Brown",
    text: "Found our dream home thanks to their expertise.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50" id="Testimonials">
      
      {/* HEADER STYLE (consistent with your site) */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          Testimonials
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          What Our Clients{" "}
          <span className="text-blue-500">Say About Us</span>
        </h1>

        <p className="text-gray-500">
          Real experiences from clients who trusted us to deliver excellence and find their dream homes.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center"
          >
            {/* Avatar */}
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold mb-2">
              {item.name}
            </h2>

            {/* Quote */}
            <p className="text-gray-600 text-sm leading-relaxed italic">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;