import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Botton/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          hello
        </Button>
        <Alert
          message={"I am an alert"}
          type={AlertType.Success}
          closable={true}
        >
          <div>I am an alert</div>
        </Alert>
      </header>
    </div>
  );
}

export default App;
