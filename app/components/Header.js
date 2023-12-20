import Image from "next/image";

//icon
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Header() {
  return (
    <div className="px-[2rem] flex flex-col gap-[10px] items-center">
      <p className="text-[35px] leading-10">Oyindobra <span className="block">Agberebi</span></p>
      <Image />
      <div className="flex flex-col gap-[10px]">
        <div className="flex text-[2.3rem] gap-[5px]">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
        </div>
        <div className="flex text-[2.3rem] gap-[5px]">
          <FaSass />
          <FaReact />
          <TbBrandNextjs />
        </div>
      </div>
      <h1 className="text-[40px] leading-10">Frontend <span className="block">Developer</span> </h1>
      <p className="w-[75%]">Designed and developing high quality web application</p>
    </div>
  );
}
