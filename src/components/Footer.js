import React from "react";
import { GrFacebook, GrTwitter, GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="px-5 py-20 lg:max-w-7xl lg:mx-auto">
        <div className="mb-10 md:flex md:items-center md:justify-center">
          <h2 className="text-4xl mb-2">JHS</h2>
          <p className="ml-2">zmartwychwstał!</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          <p>2021 - {new Date().getFullYear()}.</p>
          <ul className="flex mb-2">
            <li className="mx-2 text-2xl">
              <GrFacebook />
            </li>
            <li className="mx-2 text-2xl">
              <GrTwitter />
            </li>
            <li className="mx-2 text-2xl">
              <GrYoutube />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
