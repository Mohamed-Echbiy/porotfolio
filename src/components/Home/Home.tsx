import "./index.scss";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import image from "../../assets/images/logo_m.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Animate from "../AnimateLetters/Animate";

const Home = () => {
  const [classLetters, setClassLetters] = useState("text-animate");
  const string = " A Web Developer";
  const nameArray = ["o", "h", "a", "m", "e", "d"];
  const jobArray = string.split("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClassLetters("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <Cursor isGelly={true} />
      <div className="container home-page">
        <div className="text-zone">
          <h1
            data-cursor-color="white"
            data-cursor-size="90px"
            data-cursor-exclusion
            style={{ backgroundColor: "transparent" }}
          >
            <span className={`${classLetters}`}>H</span>
            <span className={`${classLetters} _12`}>i,</span>
            <br />
            <span className={`${classLetters} _13`}>I</span>
            <span className={`${classLetters} _14`}>'m</span>

            <img src={image} alt="developer" />
            <Animate class={classLetters} strArray={nameArray} index={15} />
            <br />
            <Animate class={classLetters} strArray={jobArray} index={22} />
          </h1>
          <h2
            data-cursor-color="white"
            data-cursor-exclusion
            style={{ backgroundColor: "transparent" }}
          >
            JavaScript Expert / Freelancer
          </h2>
          <div className="actions" data-cursor-size="1px">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>{" "}
            <Link to="/projects" className="flat-button">
              VIEW MY PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
