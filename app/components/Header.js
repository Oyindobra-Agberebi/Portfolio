import Image from "next/image";


//icon
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

//fonts
import {playFairDisplay, algreyaSans} from "./fonts"
//images
import Images from "../../public/images/images.png";

export default function Header() {
  return (
    <div className=" flex flex-col gap-[10px] items-center py-[1rem]">
      <p className="text-[36px] leading-10 text-center font-semibold text-[#414141]" ><span  className={playFairDisplay.className}>Oyindobra Agberebi</span></p>
      <Image 
            src={Images}
            alt="A picture of Dobra"
            quality={100}
            width={205}
            height={224.89}
          />
      
      <div className="flex flex-col gap-[10px]">
        <div className="flex text-[2.3rem] gap-[5px]">
          <FaHtml5 className="language-icon"/>
          <FaCss3Alt className="language-icon"/>
          <FaBootstrap className="language-icon"/>
          <IoLogoJavascript className="language-icon"/>
          
        </div>
        <div className="flex text-[2.3rem] gap-[5px]">
        <FaBootstrap className="language-icon"/>
          <SiTailwindcss className="language-icon"/>
          <FaReact className="language-icon"/>
          <TbBrandNextjs className="language-icon"/>
        </div>
      </div>

      <h1 className="text-[51px] font-semibold leading-[3.5rem] text-[#005266] text-center"><span className={playFairDisplay.className} >Frontend Developer </span></h1>
  
      <p className="w-[75%] text-center" ><span  className={algreyaSans} >Designed and developing high quality web application</span></p>
    </div>
  );
}
