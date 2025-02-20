import { LanguageContext } from "../context/language";
import { useContext } from "react";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex justify-center items-center bg-neutral-900 text-zinc-300 text-xl font-bold p-10">
      © 2024 Diego Anderson -{" "}
      {language === "portuguese"
        ? "Todos os direitos reservados"
        : "All rights reserved"}
      .
    </div>
  );
}
