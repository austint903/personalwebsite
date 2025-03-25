import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";





const Skills = () => {
  return (
    <div className="pb-24">
        <h1 className=" font-semibold py-10 text-center text-3xl">Technical Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-purple-400/50 p-4">
                <FaReact className="text-4xl"/>
            </div>
            <div className="rounded-2xl border-4 border-purple-400/50 p-4">
                <SiTypescript className="text-4xl"/>
            </div>
            <div className="rounded-2xl border-4 border-purple-400/50 p-4">
                <FaPython className="text-4xl"/>
            </div>
            <div className="rounded-2xl border-4 border-purple-400/50 p-4">
                <IoLogoJavascript className="text-4xl"/>
            </div>

        </div>

    </div>
  )
}

export default Skills