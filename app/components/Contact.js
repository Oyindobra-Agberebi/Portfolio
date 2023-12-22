//icons
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//fonts
import { playFairDisplay, algreyaSans } from "./fonts";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-[1rem] pb-[2rem] text-[#003744]">
      <div className=" text-center">
        <h2 className="text-[32px]">
          <span className={playFairDisplay.className}>Contact</span>
        </h2>
        <p className="text-[17px]">
        I can help you build your next website or manage an existing one. Let me know what you need by connecting with me </p>
        <div className="mt-[1rem]">
          <p className="text-[17px]">SEND ME A MESSAGE</p>

          <a
            href="mailto:oyindobraagberebi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-bold text-[22px] ">oyindobraagberebi@gmail.com</p>
          </a>

          
        </div>
        <div className="mt-[1.5rem]">
          <p className="text-[17px]">OR CONNECT WITH ME ON SOCIALS</p>
          <div className="mt-[.5rem]">
            <p className="socials-text">
              <span className={algreyaSans.className}>GITHUB</span>
            </p>
            <p className="socials-text">
              <span className={algreyaSans.className}>TWITTER</span>
            </p>
            <p className="socials-text">
              <span className={algreyaSans.className}>LINKEDIN</span>
            </p>
            <p className="socials-text">
              <span className={algreyaSans.className}>WHATSAPP</span>
            </p>
          </div>
        </div>
        <div className="mt-[1.5rem]">
          <p className="text-[17px]">OR FILL OUT FORM</p>
          <p className="w-[90%] bg-red-50 h-[400px] m-auto mt-[1.5rem] mb-[1.5rem]"></p>
        </div>
      </div>

      <div className="text-[20px] border-t-black border-[1px] mt-[1.5rem] pt-[1.5rem]">
        <div className="text-center">
          <span className={algreyaSans.className}>
            <p>Oyindobra Agberebi</p>
            <p>Frontend Developer</p>
          </span>
        </div>
        <div className="flex-col-center mt-[1rem] mb-[1rem] gap-[.7rem]">
          <a
            href="https://github.com/Oyindobra-Agberebi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon-style" />
          </a>
          <a
            href="https://x.com/ebicodes?s=20"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="icon-style" />
          </a>
          <a
            href="www.linkedin.com/in/oyindobra-agberebi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon-style" />
          </a>
          <a
            href="https://wa.me/+2348119091496"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="icon-style" />
          </a>

          
        </div>
        <p className=" text-center">
          <span className={algreyaSans.className}>
            Developed by Oyindobra Agberebi
          </span>
        </p>
      </div>
    </div>
  );
}
