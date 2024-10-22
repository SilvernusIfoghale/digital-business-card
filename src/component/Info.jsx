import React from "react";
import profile from "../asset/profile.jpg";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="">
      <div className="w-[360px] h-[250px] overflow-hidden">
        <img
          src={profile}
          alt="profile-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center pt-4">
        <p className="font-bold text-2xl">Ifoghale Silvernus</p>
        <p className="text-yellow-500 text-xl">Frontend Developer</p>
        <p className="">silverDev.website</p>
        <div className="flex justify-center items-center gap-5">
          <Button
            text="Email"
            btnColor="#fff"
            color="#000"
            icon={<MdEmail />}
            link="mailto:silvernusorevaoghene@gmail.com"
          />
          {/* */}
          {/*  */}
          <Button
            text="LinkedIn"
            btnColor="#397efe"
            color="#fff"
            icon={<FaLinkedin />}
            link="www.linkedin.com/in/silvernus-ifoghale-012652262 "
          />
        </div>
      </div>
    </div>
  );
}
