import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col justify-between gap-10 min-h-screen  ${theme === 'light' ? "bg-zinc-50" : "bg-zinc-800"}`}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
