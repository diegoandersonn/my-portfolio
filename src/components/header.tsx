import { useContext, useState } from "react";
import { LanguageContext } from "../context/language-context";
import { FaGear } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import {
  IoIosColorPalette,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { ThemeContext } from "../context/theme-context";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
  const [isThemeOpen, setIsThemeOpen] = useState<boolean>(false);
  const { setLanguage } = useContext(LanguageContext);
  function toggleActive() {
    if (isActive) {
      setIsLanguageOpen(false);
      setIsThemeOpen(false);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  function toggleLanguageMenu() {
    setIsLanguageOpen((prev) => !prev);
  }
  function toggleThemeMenu() {
    setIsThemeOpen((prev) => !prev);
  }
  const { language } = useContext(LanguageContext);
  const { setTheme } = useContext(ThemeContext);
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
        <div
          data-active={isActive}
          className="absolute right-full top-full bg-zinc-800 p-4 rounded-md
             opacity-0 scale-95 translate-y-[-10px] invisible transition-all duration-300 
             data-[active=true]:opacity-100 data-[active=true]:scale-100 data-[active=true]:translate-y-0 data-[active=true]:visible"
        >
          <ul>
            <li className="text-lg font-semibold">Menu</li>
            <li>
              <ul className="text-sm font-bold text-white">
                <li
                  className="flex items-center p-2 justify-between gap-2 border-t-2 border-zinc-500 cursor-pointer group"
                  onClick={toggleLanguageMenu}
                >
                  <IoLanguage className="rounded-full w-10 h-10 bg-zinc-500 p-1 group-hover:scale-110" />
                  <p className="group-hover:scale-110 group-hover:text-zinc-400">
                    {language === "portuguese" ? "Linguagem" : "Language"}
                  </p>
                  <IoIosArrowForward
                    size={24}
                    className="group-hover:scale-125"
                  />
                  <IoIosArrowDown />
                </li>
                <ul
                  data-active={isLanguageOpen}
                  className="hidden data-[active=true]:block"
                >
                  <li>
                    <button
                      onClick={() => setLanguage("portuguese")}
                      className="cursor-pointer hover:scale-110 hover:text-zinc-400"
                    >
                      Português
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setLanguage("english")}
                      className="cursor-pointer hover:scale-110 hover:text-zinc-400"
                    >
                      Inglês
                    </button>
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <ul className="text-sm font-bold text-white">
                <li
                  className="flex items-center p-2 justify-between gap-2 border-t-2 border-zinc-500 cursor-pointer group"
                  onClick={toggleThemeMenu}
                >
                  <IoIosColorPalette className="rounded-full w-10 h-10 bg-zinc-500 p-1 group-hover:scale-110" />
                  <p className="group-hover:scale-110 group-hover:text-zinc-400">
                    {language === "portuguese" ? "Tema" : "Theme"}
                  </p>
                  <IoIosArrowForward
                    size={24}
                    className="group-hover:scale-125"
                  />
                  <IoIosArrowDown />
                </li>
                <ul
                  data-active={isThemeOpen}
                  className="hidden data-[active=true]:block"
                >
                  <li>
                    <button
                      onClick={() => setTheme("light")}
                      className="cursor-pointer hover:scale-110 hover:text-zinc-400"
                    >
                      Light
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTheme("dark")}
                      className="cursor-pointer hover:scale-110 hover:text-zinc-400"
                    >
                      Dark
                    </button>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
