import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Botton/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled={true}>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          hello
        </Button>
        <Button btnType={ButtonType.Link} href={"www.qq.com"}>
          a link
        </Button>
        <a href={"https://www.qq.com"}>one line</a>
      </header>
    </div>
  );
}

export default App;
