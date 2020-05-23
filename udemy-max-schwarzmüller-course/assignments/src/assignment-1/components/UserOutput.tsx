import React from "react";

interface Props {
  username: string;
}

export const UserOutput: React.FC<Props> = (props: Props) => {
  const style = {};

  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>{props.username}</p>
    </div>
  );
};
