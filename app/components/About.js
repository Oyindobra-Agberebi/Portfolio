import Image from "next/image";

//image
import Images from "../../public/images/images.png"

//fonts
import {playFairDisplay, algreyaSans} from "./fonts"
import Link from "next/link";

export default function About() {
  return (
    <div className="m-[2rem]">
    <h2 className="text-[32px]"><span className={playFairDisplay.className}>About Me</span></h2>
      <Image 
        src={Images}
        alt="Image of Oyindobra Agberebi working"
        className="m-auto"
      />
      <div>
        <p className="my-[1rem] text-[23px] leading-6">
          <span className={algreyaSans.className}>Hello, my name is Oyindobra Agberebi and I love creating responsive
          website that helps solves users problems and are enjoyable to interact
          with. My interest in web development started while I in secondary
          school, I watched my brother creating beautiful things using his
          laptop and I got fascinated. I started learning about web development
          from course videos he gave me to follow.</span>
        </p>
        <p className="my-[1rem] text-[23px] leading-6">
          <span className={algreyaSans.className}>Today, I still learn and build projects and I have had the opportunity
          to work on different kinds of project</span>
        </p>
        <p className="my-[1rem] text-[23px] leading-6">
          <span className={algreyaSans.className}>I focus on helping clients create that web design that will help their
          product using HTML, CSS, SASS, JavaScript</span>
        </p>
      </div>

      <a
        href="https://docs.google.com/document/d/1I0GxSdoLZrjRCBqtS25YBqiGc0u2B3Pt36k9wt5-VuY/edit?usp=sharing"
        download="Oyindobra-Agberebi-Résumé"
        target="_blank"
        rel="noreferrer"

      ><button className="bg-[#005266] text-white text-[20px] px-[1.5rem] py-[1rem] rounded">Download My Résumé</button> </a>
      
    </div>
  );
}
