import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";


export default function Home() {
  return (
    <main className="bg-[#EBECDF]">
    <Navbar/>
    <Header/>
    <About/>
    <Project />
    <Contact/>
    </main>
  )
}
