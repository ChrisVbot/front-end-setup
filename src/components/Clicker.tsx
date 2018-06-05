import * as React from "react";

type Props = { onClick(e: React.MouseEvent<HTMLElement>): void };

const Clicker: React.SFC<Props> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);
