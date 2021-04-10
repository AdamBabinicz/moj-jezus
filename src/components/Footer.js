import React from "react";
import { GrFacebook, GrTwitter, GrYoutube } from "react-icons/gr";
import JHS from "../assets/11.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-5 py-20 lg:max-w-7xl lg:mx-auto">
        <div className="mb-10 md:flex md:items-center md:justify-center">
          <h2 className="text-4xl mb-2">Jezus</h2>
          <p className="ml-2">zmartwychwstał!</p>
        </div>
        <img src={JHS} alt="..." className="pb-4" />
        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          <p>2021 - {new Date().getFullYear()}.</p>
          <ul className="flex mb-2">
            <Link
              to="//www.youtube.com/watch?v=0FCHrueoHQM"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <GrYoutube />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=SDOhOUnYcjk"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <GrYoutube />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=HCd8L05y4Y8&list=PLP6t66uMxz-huiSWRWYfuHU7pNHSX1_CA"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <GrYoutube />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=k1REkbHNyOk"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <GrYoutube />
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
