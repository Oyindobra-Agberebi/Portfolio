
//icons
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//fonts
import {playFairDisplay, algreyaSans} from "./fonts"

export default function Contact() {
  return (
    <div className="pt-[1rem] pb-[2rem] text-[#003744]">
      <div className=" text-center">
        <h2 className="text-[32px]"><span className={playFairDisplay.className}>Contact</span></h2>
        <p>Need a custom website design? Get in touch</p>
        <div className="mt-[1rem]">
          <p className="text-[17px]">SEND ME A MESSAGE</p>
          <p className="font-black text-[22px] ">oyindobraagberebi@gmail.com</p>
        </div>
        <div className="mt-[1.5rem]">
            <p className="text-[17px]">OR CONNECT WITH ME ON SOCIALS</p>
            <div className="mt-[.5rem]">
            
                <p className="socials-text"><span className={algreyaSans.className}>GITHUB</span></p>
                <p className="socials-text"><span className={algreyaSans.className}>TWITTER</span></p>
                <p className="socials-text"><span className={algreyaSans.className}>LINKEDIN</span></p>
                <p className="socials-text"><span className={algreyaSans.className}>WHATSAPP</span></p>
            </div>
        </div>
        <div className="mt-[1.5rem]">
          <p className="text-[17px]">OR FILL OUT FORM</p>
          <p className="w-[90%] bg-red-50 h-[400px] m-auto mt-[1.5rem] mb-[1.5rem]"></p>
        </div>
        
      </div>

      <div className="text-[17px] border-t-black border-[1px] mt-[1.5rem] pt-[1.5rem]">
        <div className="text-center">
          <p>Oyindobra Agberebi</p>
          <p>Frontend Developer</p>
        </div>
        <div className="flex-col-center mt-[1rem] mb-[1rem] gap-[.7rem]">
          <FaGithub className="icon-style" />
          <FaXTwitter className="icon-style" />
          <FaLinkedin className="icon-style" />
          <FaWhatsapp className="icon-style" />
        </div>
        <p className=" text-center">Developed by Oyindobra Agberebi</p>
      </div>
    </div>
  );
}
