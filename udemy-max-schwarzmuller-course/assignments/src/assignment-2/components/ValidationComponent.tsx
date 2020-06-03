import React from "react";

interface Props {
  textLength: number;
}

const ValidationComponent: React.FC<Props> = (props: Props) => {
  const { textLength } = props;

  let textLengthMessage: string = "";

  if (textLength !== 0 && textLength < 5) {
    textLengthMessage = "Text too short";
  } else if (textLength > 12) {
    textLengthMessage = "Text too long";
  } else {
    textLengthMessage = "";
  }

  return (
    <div className="ValidationComponent">
      <p>Text length: {textLength} characters</p>

      <p>{textLengthMessage}</p>
    </div>
  );
};

export default ValidationComponent;
