import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image1 from "../../public/images/testimonial.png";

export default function Card() {
  return (
    <div className="w-[80%] bg-red-100 m-[1rem] rounded-[1rem] overflow-hidden ">
      <div className="w-100% h-[180px] bg-red-500">
        <Image
        className="h-[100%]"
            src={image1}
            alt="Testimonial website image"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="p-[1rem] flex-col-center flex-col gap-[1rem]">
        <h3 className="text-[25px]">Testimonial Grid</h3>
        <p className="text-[17px]">
          This is a project about an NFT project that was preparing for launch
        </p>
        <p className="text-[17px]">
            <span className="mr-[5px]">HTML</span>| 
            <span className="ml-[5px]">CSS</span>
        </p>
        <div className="flex justify-between">
        <button className="flex gap-[5px] bg-gray-400 px-[25px] py-[7px] rounded-lg"><FaExternalLinkAlt className="text-[20px]" /> Link</button>
          <button className="flex gap-[5px] bg-gray-400 px-[20px] py-[7px] rounded-lg"><FaGithub className="text-[20px]" />Code</button>
          
        </div>
      </div>
    </div>
  );
}
