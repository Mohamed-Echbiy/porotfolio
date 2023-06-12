// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { Cursor } from "react-creative-cursor";
const texts = [
  "Html",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "NextJs",
  "Solid",
  "NodeJS",
  "Sanity CMS",
  "Tailwindcss",
  "ES6",
  "GIT",
  "GITHUB",
  "REST API",
  "Jest",
  "DaisyUI",
  "Material UI",
  "MongoDb",
  "Firebase",
  "clerk Auth",
];
const TextShpere = () => {
  // Animation settings for Text Cloud

  return (
    <>
      <Cursor isGelly={true} />
      <div data-cursor-color="#fff" className="text-shpere">
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(700, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
          })}
          onClick={(tag: string, ev: MouseEvent) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {texts}
        </TagCloud>
      </div>
    </>
  );
};
export default TextShpere;
