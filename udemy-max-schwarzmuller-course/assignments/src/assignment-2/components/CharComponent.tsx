import React from "react";

interface Props {
  char: string;
  click: () => void;
}

const CharComponent: React.FC<Props> = (props: Props) => {
  const style: React.CSSProperties = {
    display: "inline-block",
    padding: "1rem",
    textAlign: "center",
    margin: "1rem",
    border: "1px solid black",
  };

  return (
    <div style={style} onClick={props.click} className="CharComponent">
      {props.char}
    </div>
  );
};

export default CharComponent;
