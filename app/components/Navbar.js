import Image from "next/image";
import Logo from "../../public/images/logo.png";
//icons
import { FaBars } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";


export default function Navbar() {
  let Links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/"},
    {name: "Projects", link: "/"},
    {name: "Contact", link: "/"},
  ];
  return (
    <nav>
      <div className="flex justify-between items-center pl-[20px] pr-[20px]">
       
       <Image
       className="  ml-[-20px] mt-[-25px] mb-[-20px]"
          src={Logo}
          alt="Oyindobra Agberebi's logo"
          width={120}
          quality={100}
          placeholder="blur"/>
          <div className=" basis-[65%] flex items-center justify-between ">
          {/* <ul className="flex gap-[1rem]">
            {
              Links.map((link) => (
                <li><a href={link.link} >{link.name}</a></li>
              ))
            }

            
          </ul> */}
          {/* <FaMoon /> */}
          </div>
          

        <FaBars />
      </div>
    </nav>
  );
}
