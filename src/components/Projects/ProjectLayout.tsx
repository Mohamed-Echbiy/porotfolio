import ImageSwiper from "./ImageSwiper";

interface ProjectData {
  title: string;
  technologies: { element?: React.ReactElement; techn: string }[];
  image: string[];
  viewLink: string;
  githubLink?: string;
}

function ProjectLayout(props: ProjectData) {
  console.log(props);
  return (
    <div className="project-container">
      <div className="title-container">
        <h1 className="title">{props.title}</h1>
        <h1 className="title_2">{props.title}</h1>
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
