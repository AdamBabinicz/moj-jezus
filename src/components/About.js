import React from "react";
import profile from "../assets/4.svg";

const About = () => {
  return (
    <>
      <section className="px-5 pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:max-auto">
        <div className="flex items-center justify-center md:items-start">
          <div className="mr-1">
            <h4 className="font-bold">Jezus Chrystus</h4>
            <p className="text-black text-opacity-50 text-sm">
              Lorem, ipsum dolor.
            </p>
          </div>
          <img src={profile} alt="..." className="w-10 md:h-10 rounded-full" />
        </div>
        <div>
          <q className="text-4xl text-center block mt-5 md:mt-0">
            Whatever a man can imagine, he can invent.
          </q>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 text-center md:text-left md:mt-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            sunt odio, pariatur rem provident placeat voluptas fugit
            exercitationem aliquid sint asperiores eum eveniet id minima!
            Impedit ut tenetur excepturi asperiores laboriosam. Perferendis
            rerum minima autem rem quae quaerat labore, quis incidunt
            voluptatem, maiores cum nobis asperiores nulla expedita, delectus
            quidem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto
            quasi explicabo laboriosam laudantium fuga ducimus, esse sit
            similique rem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            tempore consequuntur cupiditate, amet commodi modi beatae quaerat
            consequatur rem nemo tempora reiciendis odit possimus voluptatem
            nobis? Possimus magnam rerum amet.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
