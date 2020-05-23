import React from "react";

interface Props {
  username: string;
  nameChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<Props> = (props: Props) => {
  const style = {
    fontSize: "1.5rem",
    background: "#f2f2f2",
    color: "#888",
    padding: "0.25rem",
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        style={style}
        onChange={(e) => props.nameChangeHandler(e)}
        value={props.username}
      />
    </div>
  );
};
