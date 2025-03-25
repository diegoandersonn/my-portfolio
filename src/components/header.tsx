import { useContext, useState } from "react";
import { LanguageContext } from "../context/language-context";
import { FaGear } from "react-icons/fa6";
import DropdownMenu from "./dropdown-menu";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
  const [isThemeOpen, setIsThemeOpen] = useState<boolean>(false);
  function toggleActive() {
    if (isActive) {
      setIsLanguageOpen(false);
      setIsThemeOpen(false);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  const { language } = useContext(LanguageContext);
  return (
    <div className="fixed z-10 w-screen flex justify-between items-center bg-neutral-900 text-zinc-300 text-xl font-bold p-10">
      <ul className="flex gap-10">
        <li className="hover:scale-110 hover:text-white">
          <a href="#Home">{language === "portuguese" ? "Inicio" : "Home"}</a>
        </li>
        <li className="hover:scale-110 hover:text-white">
          <a href="#About">{language === "portuguese" ? "Sobre" : "About"}</a>
        </li>
        <li className="hover:scale-110 hover:text-white">
          <a href="#Projects">
            {language === "portuguese" ? "Projetos" : "Projects"}
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-center relative gap-4 mr-5">
        <button
          className="hover:scale-110 hover:text-white cursor-pointer"
          onClick={toggleActive}
        >
          <FaGear />
        </button>
        <DropdownMenu
          isActive={isActive}
          isLanguageOpen={isLanguageOpen}
          isThemeOpen={isThemeOpen}
          setIsLanguageOpen={setIsLanguageOpen}
          setIsThemeOpen={setIsThemeOpen}
        />
      </div>
    </div>
  );
}
