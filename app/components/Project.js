import Card from "./Card";

export default function Project () {
    return (
        <div className="flex flex-col items-center pt-[1rem] pb-[2rem]">
        <h2 className="text-[30px]">Project</h2>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}