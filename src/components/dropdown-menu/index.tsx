import { useContext } from "react";
import { IoIosColorPalette } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LanguageContext } from "../../context/language-context";
import { ThemeContext } from "../../context/theme-context";
import { DropdownItemsListContainer, DropdownListContainer, DropdownListHead, DropdownListItem } from "./list";
import { FaMoon, FaSun } from "react-icons/fa6";

type Props = {
  isActive: boolean;
  isLanguageOpen: boolean;
  setIsLanguageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isThemeOpen: boolean;
  setIsThemeOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropdownMenu({
  isActive,
  setIsLanguageOpen,
  isLanguageOpen,
  setIsThemeOpen,
  isThemeOpen,
}: Props) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { setTheme } = useContext(ThemeContext);
  function toggleLanguageMenu() {
    setIsLanguageOpen((prev) => !prev);
  }
  function toggleThemeMenu() {
    setIsThemeOpen((prev) => !prev);
  }
  return (
    <div
      data-active={isActive}
      className="absolute right-full top-full bg-zinc-800 p-4 rounded-md
           opacity-0 scale-95 translate-y-[-10px] invisible transition-all duration-300 
           data-[active=true]:opacity-100 data-[active=true]:scale-100 data-[active=true]:translate-y-0 data-[active=true]:visible"
    >
      <ul>
        <li className="text-lg font-semibold">Menu</li>
        <DropdownListContainer>
          <DropdownListHead isListOpen={isLanguageOpen} toggleMenu={toggleLanguageMenu}>
            <IoLanguage className="rounded-full w-10 h-10 bg-zinc-500 p-1 group-hover:scale-110" />
            <p className="group-hover:scale-110 group-hover:text-zinc-400">
              {language === "portuguese" ? "Linguagem" : "Language"}
            </p>
          </DropdownListHead>
          <DropdownItemsListContainer isMenuOpen={isLanguageOpen}>
            <DropdownListItem
              setValue={setLanguage}
              text={`${language === "portuguese" ? "Português" : "Portuguese"}`}
              value="portuguese"
              icon="Pt"
            />
            <DropdownListItem
              setValue={setLanguage}
              text={`${language === "portuguese" ? "Inglês" : "English"}`}
              value="english"
              icon="En"
            />
          </DropdownItemsListContainer>
        </DropdownListContainer>
        <DropdownListContainer>
          <DropdownListHead isListOpen={isThemeOpen} toggleMenu={toggleThemeMenu}>
            <IoIosColorPalette className="rounded-full w-10 h-10 bg-zinc-500 p-1 group-hover:scale-110" />
            <p className="group-hover:scale-110 group-hover:text-zinc-400">
              {language === "portuguese" ? "Tema" : "Theme"}
            </p>
          </DropdownListHead>
          <DropdownItemsListContainer isMenuOpen={isThemeOpen}>
            <DropdownListItem
              setValue={setTheme}
              value="light"
              text={`${language === "portuguese" ? "Claro" : "Light"}`}
              icon={<FaMoon />}
            />
            <DropdownListItem
              setValue={setTheme}
              value="dark"
              text={`${language === "portuguese" ? "Escuro" : "Dark"}`}
              icon={<FaSun />}
            />
          </DropdownItemsListContainer>
        </DropdownListContainer>
      </ul>
    </div>
  );
}
