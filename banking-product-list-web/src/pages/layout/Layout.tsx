import React, { FC } from "react";
import { layout } from "./layoutClasses";
import useTailwindClassConverter from "../../hooks/tailwind/useTailwindConverter";
type Props = {
  children: React.ReactNode;
};



const Layout: FC<Props> = ({ children }) => {  
  return (
    <>
      <div
        id="layout-gridItemsCenter-parent"
        className={useTailwindClassConverter(layout.center.parent) }
      >
        <div
          id="layout-gridItemsCenter-child"
          className={useTailwindClassConverter(layout.center.child)}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
