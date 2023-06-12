import Loader from "react-loaders";
import "./index.scss";
import TextSphere from "./TextSphere";

function Skills() {
  return (
    <>
      <div className="container skills-page">
        <TextSphere />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Skills;
