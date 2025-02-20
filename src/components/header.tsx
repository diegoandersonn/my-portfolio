import { useContext } from "react";
import { LanguageContext } from "../context/language";

export default function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="fixed z-10 w-screen flex justify-center items-center bg-neutral-900 text-zinc-300 text-xl font-bold p-10">
      <ul className="flex gap-10">
        <li>
          <a href="#Home">
            {language === "portuguese" ? "Inicio" : "Home"}
          </a>
        </li>
        <li>
          <a href="#About">
            {language === "portuguese" ? "Sobre" : "About"}
          </a>
        </li>
        <li>
          <a href="#Projects">
            {language === "portuguese" ? "Projetos" : "Projects"}
          </a>
        </li>
      </ul>
    </div>
  );
}
