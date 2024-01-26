import Project from "./Project";
import { FaGithub, FaChrome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          <Project
            image="mobileunit.jpg"
            description="IoT Broadband project providing remote internet access for First Responders"
            techStack="Python, JavaScript, HTML, CSS"
            buttons={[
              {
                name: "Website",
                image: FaChrome,
                link: "https://news.wsu.edu/press-release/2022/07/20/nomadic-broadband-could-help-rural-first-responders-stay-connected/",
              },
            ]}
          >
            Nomadic Broadband Unit
          </Project>

          <Project
            image="space.png"
            description="Graphics Library written from scratch using webgl. Library allows for rendering dynamic terrain, procedurally generated objects, lighting, cameras and custom textures and audios"
            techStack="JavaScript, CSS, HTML, WebGL"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/judgeraj/FinalProject-CS442",
              },
              {
                name: "Open",
                image: FaChrome,
                link: "https://judgeraj.github.io/FinalProject-CS442/",
              },
            ]}
          >
            Graphics Library
          </Project>

          <Project
            image="sudoku.png"
            description="iOS MVC Sudoku application "
            techStack="Swift"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/judgeraj/sudoku",
              },
            ]}
          >
            iOS Sudoku Game
          </Project>

          <Project
            image="crossword.png"
            description="Android MVC Crossword Puzzle Game"
            techStack="Java, Gradle"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/AndrewBunn00/NetworkedAndroidApp",
              },
            ]}
          >
            Crossword Puzzle Game
          </Project>
        </div>
      </div>
    </section>
  );
}
