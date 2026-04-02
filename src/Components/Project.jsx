import React, { useRef } from "react";
import house1 from '../assets/house1.jpg';
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";

const projectsData = [
  { img: house1, title: "Modern Villa", price: "$500,000" },
  { img: house2, title: "Luxury Apartment", price: "$600,000" },
  { img: house3, title: "Family House", price: "$700,000" },
  { img: house4, title: "Beach House", price: "$800,000" },
  { img: house5, title: "City Loft", price: "$550,000" },
  { img: house6, title: "Smart Home", price: "$620,000" },
  { img: house7, title: "Penthouse", price: "$900,000" },
  { img: house8, title: "Country House", price: "$480,000" },
  { img: house9, title: "Suburban Home", price: "$450,000" },
];

const Project = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50" id="projects">
      
      {/* HEADER STYLE (same as your main header pattern) */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          Our Projects
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Crafted With{" "}
          <span className="text-blue-500">Excellence & Precision</span>
        </h1>

        <p className="text-gray-500">
          Explore some of our finest real estate developments designed to meet modern living standards.
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-end max-w-7xl mx-auto mb-6 gap-3">
        <button
          onClick={scrollLeft}
          className="bg-white shadow hover:shadow-md p-3 rounded-full transition"
        >
          ◀
        </button>

        <button
          onClick={scrollRight}
          className="bg-white shadow hover:shadow-md p-3 rounded-full transition"
        >
          ▶
        </button>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar max-w-7xl mx-auto"
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="`min-w-[280px] max-w-[280px]`
             bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col justify-between `flex-grow`">
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  {project.title}
                </h2>

                <p className="text-gray-500 text-sm mb-3">
                  Premium quality property in a great location.
                </p>
              </div>

              <p className="text-xl font-bold text-green-500">
                {project.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;