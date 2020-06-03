import React, { useState } from "react";
import { UserInput } from "./components/UserInput";
import { UserOutput } from "./components/UserOutput";

export const App: React.FC = () => {
  const [state, setState] = useState({
    username: "Some sample text",
  });

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const username = event.currentTarget.value;

    setState({
      ...state,
      username,
    });
  };

  const props = {
    ...state,
    nameChangeHandler,
  };

  return (
    <div className="App">
      <UserInput {...props}></UserInput>
      <UserOutput {...state}></UserOutput>
    </div>
  );
};

export default App;
