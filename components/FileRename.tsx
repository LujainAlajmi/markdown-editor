import React from "react";
import Typography from "./Typography";

export default function FileRename({
  name,
  onChange,
}: {
  name: string;
  onChange: (name: string) => void;
}) {
  return (
    <div
      className="flex
     h-full w-full flex-row items-center space-x-4"
    >
      <div>
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="">
        <Typography type="body" className="hidden p-0 text-[#7C8187] sm:block">
          Document Name
        </Typography>
        <input
          className="h-7 w-[300px] appearance-none border-0 bg-transparent pl-0 font-sans text-[15px] text-white caret-[#E46643] focus:border-b focus:border-white focus:outline-0 focus:ring-0"
          type="text"
          value={name}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
