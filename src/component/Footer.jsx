import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-300 absolute w-full flex h-16 justify-center items-center bottom-0 gap-5">
      <a href="https://x.com/SilvernusSilver" target="_blank" rel="noreferrer">
        <FaSquareXTwitter className="text-3xl text-gray-500 hover:scale-110 hover:cursor-pointer hover:text-gray-800" />
      </a>
      <a
        href="https://www.facebook.com/silvernus.silver.1"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareFacebook className="text-3xl text-gray-500 hover:scale-110 hover:cursor-pointer hover:text-blue-600" />
      </a>
      <a href="#">
        <FaSquareInstagram className="text-3xl text-gray-500 hover:scale-110 hover:cursor-pointer hover:text-red-600" />
      </a>
      <a
        href="https://github.com/SilvernusIfoghale"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare className="text-3xl text-gray-500 hover:scale-110 hover:cursor-pointer hover:text-gray-800" />
      </a>
    </div>
  );
}
