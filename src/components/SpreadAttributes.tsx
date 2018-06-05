import * as React from "react";

export interface SFCSpreadAttributesProps {
  className?: string;
  style?: React.CSSProperties;
}

const SFCSpreadAttributes: React.SFC<SFCSpreadAttributesProps> = props => {
  const { children, ...restProps } = props;

  return <div {...restProps}>{children}</div>;
};

export { SFCSpreadAttributes };
