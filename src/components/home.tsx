import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { LanguageContext } from "../context/language";
import myFoto from "../assets/foto.jpeg";
import { useContext } from "react";

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-10 mt-40 min-h-screen" id="Home">
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-zinc-500">
          {language === "portuguese" ? "Olá Mundo!" : "Hello World!"}
        </div>
        <div className="flex flex-col items-center text-5xl font-bold text-zinc-500">
          <p>{language === "portuguese" ? "Eu sou" : "I am"} Diego Anderson</p>
          <p>{language === "portuguese" ? "Desenvolvedor" : "Developer"}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a href="https://github.com/diegoandersonn" target="/">
          <FaGithub
            size={50}
            className="hover:scale-125 hover:text-zinc-950 text-zinc-700"
          />
        </a>
        <a href="https://www.instagram.com/diegoandersonn" target="/">
          <FaInstagram
            size={50}
            className="hover:scale-125 hover:text-zinc-950 text-zinc-700"
          />
        </a>
        <a href="https://www.linkedin.com/in/diegoandersonn/" target="/">
          <FaLinkedin
            size={50}
            className="hover:scale-125 hover:text-zinc-950 text-zinc-700"
          />
        </a>
        <a
          href="https://open.spotify.com/user/zkba28q8naf8ddaux2sigwt0e?si=425bfb4c3f754fbe"
          target="/"
        >
          <FaSpotify
            size={50}
            className="hover:scale-125 hover:text-zinc-950 text-zinc-700"
          />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <img src={myFoto} alt="My Foto" className="w-96 h-96 rounded-full" />
      </div>
    </div>
  );
}
