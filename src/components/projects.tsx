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
          ? "Um projeto monorepo pessoal que permite o usuário criar times e jogadores. Desevolvovido utilizando TypeScript, ReactJS, Tailwind CSS, NodeJS and Fastify"
          : "A personal monorepo project that allows the user to create teams and players. Developed using TypeScript, ReactJS, Tailwind CSS, NodeJS and Fastify",
      image: futWorld,
      link: "https://github.com/diegoandersonn/fut-world",
    },
    {
      title: "Pomodoro App",
      description:
        language === "portuguese"
          ? "Um projeto de um curso que ajuda o usuário a se manterem produtivos gerenciado tarefas com a técnica de Pomodoro. Desevolvovido utilizando TypeScript, ReactJS, StyledComponents"
          : "A course project that helps user stay productive by managing tasks with the Pomodoro technique. Developed using TypeScript, ReactJS, StyledComponents.",
      image: pomodoroApp,
      link: "https://github.com/diegoandersonn/pomodoro-app",
    },
    {
      title: "Spotify UI",
      description:
        language === "portuguese"
          ? "Recriei a interface do Spotify Desevolvovido utilizando TypeScript, ReactJS e Tailwind CSS"
          : "Recreated Spotify's user interface. Developed using TypeScript, ReactJS and Tailwind CSS.",
      image: spotifyUi,
      link: "https://github.com/diegoandersonn/spotify-ui",
    },
    {
      title: "Task Management App",
      description:
        language === "portuguese"
          ? "Aplicação monorepo para gerenciamento de tarefas. Desenvolvida utilizando TypeScript, ReactJS, Tailwind CSS, NodeJS e Fastify."
          : "Application monorepo for task management. Developed using TypeScript, ReactJS, Tailwind CSS, NodeJS and Fastify.",
      image: taskManagement,
      link: "https://github.com/diegoandersonn/task-management-app",
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-screen" id="Projects">
      <div>
        <div className="p-4">
          <h1 className="text-zinc-700 text-4xl font-bold">
            {language === "portuguese" ? "Meus Projetos" : "My Projects"}
          </h1>
          <p className="text-zinc-500 text-sm ">
            {language === "portuguese"
              ? "Clique na imagem para ir ao repositório no GitHub!"
              : "Click on the image to visit the GitHub repository!"}
          </p>
        </div>
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
