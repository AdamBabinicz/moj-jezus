import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profile from "../assets/2.svg";
import showcaseImage from "../assets/11.jpg";

const Showcase = () => {
  return (
    <>
      <section
        id="home"
        className="pb-20 lg:flex lg:max-w-7xl lg:mx-auto lg:py-32"
      >
        <div className="flex items-center justify-center py-10 lg:items-start lg:justify-start">
          <div className="mr-1">
            <h4 className="font-bold">Jezus Chrystus</h4>
            <p className="text-black text-opacity-50 text-sm">
              Droga, Prawda i Życie.
            </p>
          </div>
          <img src={profile} alt="..." className="w-10 rounded-full" />
        </div>

        <div className="px-5 text-center lg:w-2/3 lg:mx-auto">
          <h1 className="text-4xl text-black text-opacity-25 mb-2 lg:text-6xl lg:text-left">
            Dla Jego bolesnej męki, <br />
            <ReactTypingEffect
              text={["miej miłosierdzie dla nas i całego świata.", "", ""]}
              typingDelay={1500}
              eraseSpeed={50}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return <span key={key}>{char}</span>;
                    })}
                  </h1>
                );
              }}
            />
          </h1>
          <p className="font-bold mt-5 mb-4 text-black text-opacity-25 lg:text-left">
            źródło: z koronki do Miłosierdzia Bożego
          </p>
          <p className="lg:text-left">
            <b>Święty Boże, Święty Mocny, Święty Nieśmiertelny,</b> zmiłuj się
            nad nami i nad całym światem.
          </p>
          <p className="lg:text-left">
            <b>O Krwi i Wodo,</b> któraś wytrysnęła z <b>Serca Jezusowego</b>{" "}
            jako zdrój miłosierdzia dla nas, <b>UFAMY TOBIE.</b>
          </p>
        </div>
      </section>
      <div className="showcase-image mt-10 pb-20">
        <img src={showcaseImage} alt="..." className="lg:w-full lg:h-1/4" />
      </div>
    </>
  );
};

export default Showcase;
