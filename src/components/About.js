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
              moim Zbawicielem.
            </p>
          </div>
          <img src={profile} alt="..." className="w-10 md:h-10 rounded-full" />
        </div>
        <div>
          <q className="text-4xl text-center block mt-5 md:mt-0">
            Odkupiłeś nas, Panie, Krwią swoją.
          </q>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 md:text-left md:mt-0">
          <p>
            Wszechmogący, wieczny Boże, Ty Jednorodzonego Syna swego ustanowiłeś
            Odkupicielem świata i&nbsp;Krwią Jego dałeś się przebłagać, † daj
            nam, prosimy, godnie czcić zapłatę naszego zbawienia i&nbsp;dzięki
            niej doznawać obrony od zła doczesnego na&nbsp;ziemi, * abyśmy
            wiekuistym szczęściem radowali się w&nbsp;niebie.
            <p>Przez Chrystusa, Pana naszego. Amen.</p>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
