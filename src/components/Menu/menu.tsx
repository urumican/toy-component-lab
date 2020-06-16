import React, { useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";

type SelectCallback = (selectedIndex: number) => void;

interface LabManuContext {
  curIdx: number;
  onSelect?: SelectCallback;
}

export const MenuContext = React.createContext<LabManuContext>({
  curIdx: 0,
});

type MenuMode = "h" | "v";

export interface MenuProps {
  defaultInndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultInndex, onSelect } = props;
  const [curActive, setCurActive] = useState(defaultInndex);
  const classes = classNames("lab-menu", className, {
    "menu-vertical": mode === "v",
  });

  const handleClick = (index: number) => {
    setCurActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: LabManuContext = {
    curIdx: curActive !== undefined ? curActive : 0,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, { index: index });
      } else {
        console.warn("Warning: Menu has a child that is not a MenuItem.");
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultInndex: 0,
  mode: "h",
};

export default Menu;
