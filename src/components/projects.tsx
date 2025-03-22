import { useContext } from "react";
import { LanguageContext } from "../context/language-context";
import spotifyUi from "../assets/spotifyui.png";
import futWorld from "../assets/futworld.png";
import pomodoroApp from "../assets/pomodoroapp.png";
import capputenoChallenge from "../assets/capputenochallenge.png";
import taskManagement from "../assets/taskmanagement.png";
import { ThemeContext } from "../context/theme-context";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "FutWorld",
      description:
        language === "portuguese"
          ? "Um projeto monorepo pessoal que permite o usuário criar, filtrar, editar e remover times e jogadores e consome uma API publica. Desevolvovido utilizando TypeScript, ReactJS, Tailwind CSS, NodeJS e Fastify"
          : "A personal monorepo project that allows the user to create, filter, edit and delete teams and players and consume a public API. Developed using TypeScript, ReactJS, Tailwind CSS, NodeJS and Fastify",
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
    {
      title: "Capputeno Challenge",
      description:
        language === "portuguese"
          ? "Um desafio FrontEnd proposto pela Rocketseat, onde o objetivo era criar um website para uma loja ficticia chamada Capputeno e implementar certas funcionalidades como um carrinhos de compras. Desenvolvido utilizando TypeScript, React, StyledComponents e consumindo uma API GraphQL"
          : "A FrontEnd challenge proposed by Rocketseat, where the goal was to create a wesbsite for a fictional store called Capputeno and implement certain functionalities like a shopping cart. Developed using TypeScript, React, StyledComponents and consuming a GraphQL API",
      image: capputenoChallenge,
      link: "https://github.com/diegoandersonn/frontend-challenge-rocketseat",
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-screen" id="Projects">
      <div>
        <div className="p-4">
          <h1
            className={` text-4xl font-bold ${
              theme === "light" ? "text-zinc-700" : "text-zinc-300"
            }`}
          >
            {language === "portuguese" ? "Meus Projetos" : "My Projects"}
          </h1>
          <p
            className={`text-sm ${
              theme === "light" ? "text-zinc-500" : "text-zinc-200"
            }`}
          >
            {language === "portuguese"
              ? "Clique na imagem para ir ao repositório no GitHub!"
              : "Click on the image to visit the GitHub repository!"}
          </p>
        </div>
        <ul>
          {projects.map((project) => (
            <li className="mr-4 ml-2 border-t border-b border-zinc-500">
              <div className="flex m-4">
                <a href={project.link} target="/">
                  <img
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    className="w-60 h-52 border-2 border-zinc-400 rounded-md"
                  />
                </a>
                <div className="flex flex-col gap-2 p-2 w-[70%]">
                  <p
                    className={`text-3xl font-bold ${
                      theme === "light" ? "text-zinc-700" : "text-zinc-300"
                    }`}
                  >
                    {project.title}
                  </p>
                  <p
                    className={`text-md font-semibold ${
                      theme === "light" ? "text-zinc-500" : "text-zinc-200"
                    }`}
                  >
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
