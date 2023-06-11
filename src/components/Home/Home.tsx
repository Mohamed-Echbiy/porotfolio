import "./index.scss";
import image from "../../assets/images/logo_m.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Animate from "../AnimateLetters/Animate";
const Home = () => {
  const [classLetters, setClassLetters] = useState("text-animate");
  const string = "web Developer";
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
    <div className="container home-page">
      <div className="text-zone">
        <h1>
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
        <h2>Frontend Developer / JavaScript Expert / Freelancer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
