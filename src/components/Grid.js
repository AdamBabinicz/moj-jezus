import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import grid1 from "../assets/3.jpg";
import grid2 from "../assets/12.jpg";

const Grid = () => {
  return (
    <>
      <section className="sm:grid sm:grid-cols-2 sm:gap-5 lg:max-w-7xl lg:mx-auto pb-10">
        <div className="relative">
          <img src={grid1} alt="..." />
          <h4 className="absolute bottom-20 text-black text-opacity-25 text-2xl px-5">
            Jezu, Ty mnie kochasz!
          </h4>
          <button className="absolute right-0 bottom-0 bg-black bg-opacity-25 py-2 px-4 flex items-center">
            Kliknij <FaArrowRight className="ml-1" />
          </button>
        </div>

        <div className="relative mt-5 sm:mt-0">
          <img src={grid2} alt="..." />
          <h4 className="absolute top-2 right-2 bg-white py-2 px-6">
            Lorem ipsum dolor sit.
          </h4>
          <FiPlayCircle className="absolute bottom-10 text-6xl text-white left-5" />
        </div>
      </section>
    </>
  );
};

export default Grid;
