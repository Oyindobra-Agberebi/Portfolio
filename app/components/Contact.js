import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-[1rem] pb-[2rem]">
      <div className=" text-center">
        <h2 className="text-[30px]">Contact</h2>
        <p>Need a custom website design? Get in touch</p>
        <div className="mt-[1rem]">
          <p >SEND ME A MESSAGE</p>
          <p className="font-black text-[18px]">oyindobraagberebi@gmail.com</p>
        </div>
        <div className="mt-[1.5rem]">
            <p>OR CONNECT WITH ME ON SOCIALS</p>
            <div className="mt-[.5rem]">
                <p className="socials-text">GITHUB</p>
                <p className="socials-text">TWITTER</p>
                <p className="socials-text">LINKEDIN</p>
                <p className="socials-text">WHATSAPP</p>
            </div>
        </div>
        <div className="mt-[1.5rem]">
          <p >OR FILL OUT FORM</p>
          <p className="w-[90%] bg-red-50 h-[400px] m-auto mt-[1.5rem] mb-[1.5rem]"></p>
        </div>
        
      </div>

      <div className=" border-t-black border-[1px] mt-[1.5rem] pt-[1.5rem]">
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
