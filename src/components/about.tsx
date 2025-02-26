import { useContext } from "react";
import { LanguageContext } from "../context/language";
import Caurosel from "./caurosel";
import tailwindLogo from "../assets/tailwind.png";
import tsLogo from "../assets/typescript.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html.png";
import sqlLogo from "../assets/sql.png";
import gitLogo from "../assets/git.png";

export default function About() {
  const { language } = useContext(LanguageContext);
  const data = [
    {
      title: "TypeScript",
      image: tsLogo,
    },
    {
      title: "React",
      image: reactLogo,
    },
    {
      title: "Tailwind",
      image: tailwindLogo,
    },
    {
      title: "JavaScript",
      image: jsLogo,
    },
    {
      title: "HTML e CSS",
      image: htmlLogo,
    },
    {
      title: "SQL",
      image: sqlLogo,
    },
    {
      title: "GIT",
      image: gitLogo,
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-screen" id="About">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-zinc-500 font-bold">
          {language === "portuguese" ? "Quem sou eu?" : "Who am I?"}
        </h1>
        <p className="text-xl text-zinc-500 font-bold w-[50%]">
          {language === "portuguese"
            ? "Meu nome é Diego e eu sou um desenvolvedor de 19 anos. Eu sou brasileiro e nasci em Santos - SP, mas agora moro em Blumenau - SC. Estou no quarto semestre de Analise e Desenvolvimento de Sistema no IFSC - Campus Gaspar. Além da programação, adoro assistir e jogar futebol, jogar videogames como Valorant e Counter-Strike, ouvir musicas, musculação e sair para me divertir com meus amigos."
            : "My name is Diego and I'm a 19 years old developer. I'm from Brazil and I was born in Santos - SP, but now I live in Blumenau - SC. I'm on fourth semester of Systems Analysis and Development on IFSC - Campus Gaspar. Besides progamming, I love watching and playing soccer, playing videogames like Valorant and Counter-Strike, listening to music, working out and going out to have fun with my friends."}
        </p>
      </div>
      <Caurosel data={data} />
    </div>
  );
}
