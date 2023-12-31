import { useEffect, useState } from "react";
import Animate from "../AnimateLetters/Animate";
import "./index.scss";
import Lottie from "lottie-react";
import animation from "../../assets/animation/121929-about.json";
import Loader from "react-loaders";
function About() {
  const [classLetters, setClassLetters] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClassLetters("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const str = "About Me";
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animate class={classLetters} strArray={str.split("")} index={15} />
          </h1>
          <p>
            Hello, I'm Mohamed Echbiy, a passionate web developer with a strong
            skillset in Node.js, Express, Next.js, React.js, and Solid.js. I
            thrive on turning ideas into reality and creating impactful web
            experiences. With expertise in RESTful API development and crafting
            visually appealing websites using JavaScript, HTML, CSS, SCSS, and
            Tailwind CSS, I bring projects to life with precision and
            creativity.
          </p>
          <p>
            What sets me apart is my genuine enthusiasm for web development. I
            constantly strive to stay updated with the latest technologies and
            best practices, ensuring that I deliver cutting-edge solutions to my
            clients. I have a knack for integrating third-party libraries like
            Daisy UI, Firebase, Clerk Auth, and leveraging services such as
            Stripe to enhance functionality and user experiences. Collaboration
            is at the heart of my work. I believe in close communication and
            understanding the vision and goals of my clients.
          </p>
          <p>
            By working together, we can create web solutions that not only meet
            your expectations but also leave a lasting impact on your target
            audience. If you're looking for a dedicated and passionate web
            developer to bring your ideas to life, I would be thrilled to be a
            part of your journey. Let's connect and explore how we can create
            exceptional web experiences together. Feel free to reach out to me
            to discuss your web development needs or explore potential
            collaborations.
          </p>
        </div>
        <div className="stage-cube-cont">
          <Lottie animationData={animation} />
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  );
}

export default About;
