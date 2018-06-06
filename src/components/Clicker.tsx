import * as React from "react";

interface IProps {
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const Clicker: React.SFC<IProps> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);
