import React from "react";
import { Menutopside } from "../Navbar/Menutopside";

interface IProps {
  children: JSX.Element;
}

const PanelLayout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <main className="main-panel">
      <Menutopside />
      <section className="main-panel-content">{children}</section>
    </main>
  );
};

export default PanelLayout;
