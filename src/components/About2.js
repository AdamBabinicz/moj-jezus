import React from "react";
import { GrFacebook, GrTwitter, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const About2 = () => {
  return (
    <>
      <section className="px-5 md:w-1/2 md:ml-auto lg:pr-40 pb-10">
        <h2 className="text-3xl text-center mb-2 md:text-left">
          Najdroższa Krew Chrystusa
        </h2>
        <div className="bg-black bg-opacity-30 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
        <div className="grid grid-cols-1 gap-5">
          <p>
            W pełnej świadomości mojej nicości a&nbsp;zarazem Twojej,
            o&nbsp;miłosierny Zbawicielu wielkości, upadam do&nbsp;Twoich stóp
            i&nbsp;dziękuję Ci za&nbsp;tak wiele dowodów łask, które Ty mnie
            niewdzięcznemu stworzeniu okazałeś, a&nbsp;szczególnie, że&nbsp;Ty
            mnie przez Twoją Najświętszą Krew uwolniłeś z&nbsp;szatańskiej mocy
            zepsucia. W&nbsp;obecności mojej Matki Maryi, mojego Anioła Stróża,
            moich świętych Patronów, całego Dworu Niebieskiego poświęcam się
            o&nbsp;Najukochańszy Jezu z&nbsp;całą szczerością serca, jak
            najdobrowolniej, Twojej Najdroższej Krwi, przez którą cały świat
            odkupiłeś od grzechu, śmierci i&nbsp;piekła. Ja ....... przyrzekam
            Ci, licząc na pomoc Twojej łaski, z&nbsp;całych mych sił
            i&nbsp;według mych możliwości, budzić i&nbsp;rozszerzać nabożeństwo
            do&nbsp;Twojej Najświętszej Krwi, ceny naszego Odkupienia tak, aby
            Twa Krew, tak bardzo godna adoracji od wszystkich była uczczona
            i&nbsp;uwielbioną. W ten sposób chcę moją niewierność przeciw Twojej
            Najdroższej Krwi i&nbsp;Miłości wynagrodzić i&nbsp;Tobie
            zadośćuczynić za&nbsp;tak liczne profanacje i&nbsp;znieważenia,
            które ludzie Twojej Najdroższej Cenie naszego zbawienia zadają. O!
            Gdyby można było moje własne grzechy, moją oziębłość
            i&nbsp;wszystkie zniewagi, którymi Ciebie o&nbsp;Najdroższa Krwi
            kiedykolwiek znieważyłem, unicestwić! Patrz o&nbsp;najukochańszy
            Jezu, oto ofiaruję Ci też miłość, cześć i&nbsp;uwielbienie, które
            Twoja Najświętsza Matka, Twoi wierni uczniowie i&nbsp;wszyscy
            święci, Twej Najdroższej Krwi przynieśli. Proszę Cię, zechciej
            nie&nbsp;myśleć więcej mojej dotychczasowej niewierności
            i&nbsp;oziębłości, a&nbsp;wszystkim bluźniercom zechciej wszystko
            przebaczyć. Pokrop o Boski Zbawicielu Twoją Najdroższą Krwią mnie,
            jak również wszystkich ludzi, abyśmy Cię, o&nbsp;Ukrzyżowana Miłości
            Zbawiciela, od razu, całym sercem miłowali i&nbsp;cenę naszego
            Odkupienia po wszystkie czasy jak najdogodniej czcić mogli. Amen
          </p>
          <ul className="flex items-center justify-center md:justify-start">
            <Link
              to="//www.youtube.com/watch?v=IhsdzZ4kfKA"
              target="_blank"
              className="mx-5 text-2xl"
            >
              <GrYoutube />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=R-dBhBH_a6g"
              target="_blank"
              className="mx-5 text-2xl"
            >
              <GrYoutube />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=3BQjYUQf8ts"
              target="_blank"
              className="mx-5 text-2xl"
            >
              <GrYoutube />
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About2;
