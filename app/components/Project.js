import Card from "./Card";

//fonts
import { playFairDisplay } from "./fonts";
import { algreyaSans } from "./fonts";

export default function Project () {
    return (
        <div className="flex flex-col items-center pt-[1rem] pb-[2rem]">
        <h2 className={playFairDisplay.className}><span className="text-[32px] text-left">Project</span></h2>
        <p  className="text-[20px] mx-[2rem] leading-5 my-[1rem]"><span  className={algreyaSans.className}>These are a couple of projects I have worked on itn the past</span></p>
        
            <div className="flex flex-col items-center sm:flex-row sm:m-auto sm:justify-center sm:flex-wrap">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}