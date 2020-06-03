import React, { useState } from "react";
import Validation from "./components/ValidationComponent";
import Char from "./components/CharComponent";

export const App: React.FC = () => {
  const [state, setState] = useState({
    inputText: "",
  });

  const inputChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      inputText: event.currentTarget.value,
    });
  };

  const removeCharHandler = (charIndex: number) => {
    const inputText = state.inputText.split("");

    inputText.splice(charIndex, 1);

    setState({
      ...state,
      inputText: inputText.join(""),
    });
  };

  const { inputText } = state;

  const charList = inputText
    .split("")
    .map((char, index) => (
      <Char key={index} char={char} click={() => removeCharHandler(index)} />
    ));

  return (
    <div className="App">
      <input type="text" onChange={(e) => inputChangedHandler(e)} value={inputText} />

      <Validation textLength={inputText.length} />

      {charList}
    </div>
  );
};

export default App;
