import React from "react";
import { GrFacebook, GrTwitter, GrYoutube } from "react-icons/gr";

const About2 = () => {
  return (
    <>
      <section className="px-5 md:w-1/2 md:ml-auto lg:pr-40 pb-10">
        <h2 className="text-3xl text-center mb-2 md:text-left">
          Know Yourself
        </h2>
        <div className="bg-black bg-opacity-30 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
        <div className="grid grid-cols-1 gap-5 text-center md:text-left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sapiente quo, quaerat expedita iusto perferendis, voluptas hic
            repellendus quia delectus ipsum alias et deserunt quisquam! Ducimus
            nisi doloremque nostrum nemo facilis, quos similique. Nam illum
            assumenda, vitae, ab labore error recusandae dignissimos a eligendi
            maxime corporis voluptates modi beatae exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            asperiores cumque deleniti dolorem aperiam laboriosam quos animi.
            Voluptate saepe omnis, quod commodi sequi nam, quo perferendis
            magnam deleniti, nobis consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            voluptate.
          </p>
          <ul className="flex items-center justify-center md:justify-start">
            <li className="mx-5 text-2xl">
              <GrFacebook />
            </li>
            <li className="mx-5 text-2xl">
              <GrTwitter />
            </li>
            <li className="mx-5 text-2xl">
              <GrYoutube />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About2;
