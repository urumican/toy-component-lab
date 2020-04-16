import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface AlertProps {
  message: string;
  children: React.ReactNode;
  type: AlertType;
  closable?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { children, closable } = props;
  const refContainer = useRef<HTMLDivElement>(null);

  const onClose = () => {
    refContainer.current &&
      ReactDOM.unmountComponentAtNode(refContainer.current);
  };

  const content = (
    <div className={"my-lab-alert"}>
      {children}
      {closable && (
        <div>
          <button onClick={onClose}> close </button>
        </div>
      )}
    </div>
  );

  useEffect(() => {
    refContainer.current && ReactDOM.render(content, refContainer.current);

    return () => {
      console.log("clean the alert effect");
    };
  }, [content]);

  return (
    <div>
      <div style={{ display: "inline-block" }} ref={refContainer} />
    </div>
  );
};

export default Alert;
