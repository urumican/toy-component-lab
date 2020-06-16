import React, { useRef, useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Botton/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/MenuItem";
import useClickOutside from "./hooks/onClickHook";

function App() {
  const myref = useRef<HTMLDivElement>(null)
  const [flag, setFlag] = useState<boolean>(true)

  useClickOutside(myref, () => {
    console.log("aaaaaaaaaaaaaaaaaaaa")
  })
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} onClick={(e) => {
          setFlag(!flag)
        }}>
          hello
        </Button>
        <Alert
          message={"I am an alert"}
          type={AlertType.Success}
          closable={true}
        >
          <div>I am an alert</div>
        </Alert>

        <div ref={myref}>
          <Menu mode={"v"} defaultInndex={0} >
            <MenuItem>first item</MenuItem>
            <MenuItem>second item</MenuItem>
            <MenuItem>third item</MenuItem>
          </Menu>
        </div>
      </header>
    </div>
  );
}

export default App;
