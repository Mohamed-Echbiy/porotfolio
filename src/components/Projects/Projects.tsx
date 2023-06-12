import "./index.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProjectLayout from "./ProjectLayout";
import {
  SiDaisyui,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function Projects() {
  return (
    <div className="container projects-container">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide">
          <ProjectLayout
            image={["/zorin_1.png", "/zorin_2.png", "/zorin_3.png"]}
            githubLink="https://github.com/Mohamed-Echbiy/ZorinOs_Website_Clone"
            viewLink="https://zorin-clone.netlify.app/"
            title="Zorin Os"
            technologies={[
              {
                techn: "tailwindcss",
                element: <SiTailwindcss size="50px" color="white" />,
              },
              {
                techn: "NEXTJS",
                element: <SiNextdotjs size="50px" color="white" />,
              },
            ]}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ProjectLayout
            title="Animotime"
            viewLink="https://www.animotime.site/"
            githubLink="https://github.com/Mohamed-Echbiy/animo-timev3"
            image={[
              "/animotime_1.png",
              "/animotime_2.png",
              "/animotime_3.png",
              "/animotime_4.png",
            ]}
            technologies={[
              {
                techn: "NextJs",
                element: <SiNextdotjs size="50px" color="white" />,
              },
              {
                techn: "Tailwindcss",
                element: <SiTailwindcss size="50px" color="white" />,
              },
              {
                techn: "Sanity Cms",
              },
              {
                techn: "Firebase",
                element: <SiFirebase size="50px" color="white" />,
              },
              {
                techn: "Nodejs",
                element: <SiNodedotjs size="50px" color="white" />,
              },
              {
                techn: "Typescript",
                element: <SiTypescript size="50px" color="white" />,
              },
              {
                techn: "Framer Motion",
                element: <TbBrandFramerMotion size="50px" color="white" />,
              },
              {
                techn: "MongoDb",
                element: <SiMongodb size="50px" color="white" />,
              },
            ]}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ProjectLayout
            title="Nassau"
            technologies={[
              {
                techn: "NextJs",
                element: <SiNextdotjs size="50px" color="white" />,
              },
              {
                techn: "Tailwindcss",
                element: <SiTailwindcss size="50px" color="white" />,
              },
              {
                techn: "DaisyUi",
                element: <SiDaisyui size="50px" color="white" />,
              },
              {
                techn: "MongoDb",
                element: <SiMongodb size="50px" color="white" />,
              },
              {
                techn: "Nodejs",
                element: <SiNodedotjs size="50px" color="white" />,
              },
              {
                techn: "firebase",
                element: <SiFirebase size="50px" color="white" />,
              },
              {
                techn: "Sanity CMS",
              },
              {
                techn: "Framer Motion",
                element: <TbBrandFramerMotion size="50px" color="white" />,
              },
              {
                techn: "Stripe Api",
              },
            ]}
            image={[
              "/nassau_1.png",
              "/nassau_2.png",
              "/nassau_3.png",
              "/nassau_4.png",
              "/nassau_5.png",
            ]}
            viewLink="https://nassau.netlify.app/"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
