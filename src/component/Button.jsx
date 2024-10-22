import React from "react";

export default function Email({ text, btnColor, color, icon, link }) {
  return (
    <div className="mt-5">
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className="  flex justify-center items-center gap-2 w-36 h-10 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 hover:transition-transform"
          style={{ backgroundColor: btnColor, color: color }}
        >
          {icon} {text}
        </div>
      </a>
    </div>
  );
}
