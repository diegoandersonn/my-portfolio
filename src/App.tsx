import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";

export default function App() {
  return (
    <div className="flex flex-col justify-between gap-10 min-h-screen bg-zinc-50">
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
