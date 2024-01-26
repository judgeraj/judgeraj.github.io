import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Homepage({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Function;
}) {
  useEffect(() => {
    if (
      localStorage.getItem("nd-theme") === "dark" ||
      localStorage.getItem("nd-theme") === "light"
    )
      setTheme(localStorage.getItem("nd-theme"));
    else
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
  }, []);

  return (
    <>
      <Helmet>
        <title>Rajpreet Judge</title>
        <meta
          name="description"
          content="I am a Software Engineer. This is my portfolio website."
        />
        <link rel="icon" href="/logo.png" />
        {/* <link rel="canonical" href="https://daridis.com/" /> */}
      </Helmet>

      <Navbar
        theme={theme}
        setTheme={setTheme}
        navbarMargin={{
          marginLeft:
            "ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/logo.png"
        logoTitle=""
        menu={["Home", "Skills", "Portfolio"]}
      />
      <Home
        h2Title="Hello, I'm"
        h1Title="Rajpreet Judge"
        description={null}
        typedInfo={{
          textBefore: "A",
          strings: ["Software Engineer", "Software Developer"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
        }}
        internalLink={{
          to: "portfolio",
          text: "View Portfolio",
        }}
        externalLinks={[
          {
            link: "https://github.com/judgeraj",
            image: FaGithub,
            text: "",
          },
          {
            link: "https://www.linkedin.com/in/rajpreetjudge42/",
            image: FaLinkedin,
            text: "",
          },
        ]}
      />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}
