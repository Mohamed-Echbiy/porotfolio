import { FaCode, FaEye } from "react-icons/fa";
import ImageSwiper from "./ImageSwiper";
import Animate from "../AnimateLetters/Animate";
import { useState, useEffect } from "react";

interface ProjectData {
  title: string;
  technologies: { element?: React.ReactElement; techn: string }[];
  image: string[];
  viewLink: string;
  githubLink?: string;
}

function ProjectLayout(props: ProjectData) {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const setTime = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return clearTimeout(setTime);
  }, []);
  return (
    <div className="project-container">
      <div className="links-container">
        <a href={props.viewLink} target="_blank" rel="noopener noreferrer">
          <FaEye size="30px" color="white" />
        </a>
        {props.githubLink ? (
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <FaCode size="30px" color="white" />
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="title-container">
        <h1 className="title">
          <Animate
            class={letterClass}
            index={props.title.length + 5}
            strArray={props.title.split("")}
          />
        </h1>
        <h1 className="title_2">
          <Animate
            class={letterClass}
            index={props.title.length + 5}
            strArray={props.title.split("")}
          />
        </h1>
      </div>
      <div className="image">
        <ImageSwiper images={props.image} />
      </div>
      <div className="technologies">
        {props.technologies.map((el) => (
          <span className={`${!el.element && "techno"}`} title={el.techn}>
            {el.element ? el.element : el.techn}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectLayout;
