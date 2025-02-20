import { createContext, ReactNode, useState } from "react";

type LanguageContextType = {
  language: "portuguese" | "english";
  setLanguage: React.Dispatch<React.SetStateAction<"portuguese" | "english">>;
  toggleLanguage: () => void;
};

type LanguageProviderType = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType>({
  language: "portuguese",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderType) => {
  const [language, setLanguage] = useState<"portuguese" | "english">(
    "portuguese"
  );
  const toggleLanguage = () => {
    setLanguage(language === "portuguese" ? "english" : "portuguese");
  };
  return (
    <LanguageContext value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
};
