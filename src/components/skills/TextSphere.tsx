// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef } from "react";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagCloud";
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

      const options = {
        radius: 600,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
export default TextShpere;
