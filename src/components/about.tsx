import tailwindLogo from "../assets/tailwind.png";
import tsLogo from "../assets/typescript.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html.png";
import sqlLogo from "../assets/sql.png";
import gitLogo from "../assets/git.png";
import Caurosel from "./caurosel";

export default function About() {
  const data = [
    {
      title: "TypeScript",
      image: tsLogo,
    },
    {
      title: "React",
      image: reactLogo,
    },
    {
      title: "Tailwind",
      image: tailwindLogo,
    },
    {
      title: "JavaScript",
      image: jsLogo,
    },
    {
      title: "HTML e CSS",
      image: htmlLogo,
    },
    {
      title: "SQL",
      image: sqlLogo,
    },
    {
      title: "GIT",
      image: gitLogo,
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-screen" id="About">
      <Caurosel data={data} />
    </div>
  );
}
