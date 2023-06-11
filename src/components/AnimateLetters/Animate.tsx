import "./index.scss";

interface LetterAnimation {
  class: string;
  strArray: string[];
  index: number;
}

function Animate(props: LetterAnimation) {
  console.log(props.class);
  return (
    <span>
      {props.strArray.map((char, i) => (
        <span className={`${props.class} _${i + props.index}`} key={i + char}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default Animate;
