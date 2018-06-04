import * as React from "react";
import "./hello.scss";
import * as mainStyles from "../styles/main.scss";
import * as helloStyles from "./hello.scss";

export interface HelloProps {
  compiler: String;
  framework: String;
}
const Hello = (props: HelloProps) => (
  <h1 className={mainStyles.example}>
    Hello from <p className={helloStyles.firstTitle}>{props.compiler}</p> and{" "}
    <p className={helloStyles.secondTitle}>{props.framework}</p>!
  </h1>
);

// Export this way for React DevTools
export { Hello };
