import { useContext } from "react";
import { LanguageContext } from "../context/language";
import spotifyUi from "../assets/spotifyui.png";
import futWorld from "../assets/futworld.png";
import pomodoroApp from "../assets/pomodoroapp.png";
import taskManagement from "../assets/taskmanagement.png";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const projects = [
    {
      title: "FutWorld",
      description:
        language === "portuguese"
          ? "Um projeto pessoal que permite o usuário criar times e jogadores. Utilizando JS, ReactJS, StyledComponents e React Router Dom"
          : "A personal project that allows the user to create teams and players. Using JS, ReactJS, StyledComponents and React Router Dom",
      image: futWorld,
      link: "https://github.com/diegoandersonn/fut-world",
    },
    {
      title: "Pomodoro App",
      description:
        language === "portuguese"
          ? "Um projeto de um curso que ajuda o usuário a se manterem produtivos gerenciado tarefas com a técnica de Pomodoro. Utilizando TypeScript, ReactJS, StyledComponents"
          : "A course project that helps user stay productive by managing tasks with the Pomodoro technique. Using TypeScript, ReactJS, StyledComponents.",
      image: pomodoroApp,
      link: "https://github.com/diegoandersonn/pomodoro-app",
    },
    {
      title: "Spotify UI",
      description:
        language === "portuguese"
          ? "Recriei a interface do Spotify Utilizando TypeScript, ReactJS e TailwindCss"
          : "Recreated Spotify's user interface. Using TypeScript, ReactJS and TailwindCss.",
      image: spotifyUi,
      link: "https://github.com/diegoandersonn/spotify-ui",
    },
    {
      title: "Task Management App",
      description:
        language === "portuguese"
          ? "Recriei a interface do Spotify Utilizando TypeScript, ReactJS e TailwindCss"
          : "Recreated Spotify's user interface. Using TypeScript, ReactJS and TailwindCss.",
      image: taskManagement,
      link: "https://github.com/diegoandersonn/task-management-app",
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-screen" id="Projects">
      <div>
        <h1 className="text-zinc-700 text-4xl font-bold p-4">
          {language === "portuguese" ? "Meus Projetos" : "My Projects"}
        </h1>
        <ul>
          {projects.map((project) => (
            <li className="mr-4 ml-2 border-t border-b border-zinc-500">
              <div className="flex m-4 ">
                <a href={project.link} target="/">
                  <img
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    className="w-60 h-52 border-2 border-zinc-400 rounded-md"
                  />
                </a>
                <div className="flex flex-col gap-2 p-2 w-[70%]">
                  <p className="text-3xl font-bold text-zinc-700">
                    {project.title}
                  </p>
                  <p className="text-md font-semibold text-zinc-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
