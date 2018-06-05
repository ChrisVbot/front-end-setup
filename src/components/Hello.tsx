import * as React from "react";
import "./hello.scss";
import * as mainStyles from "../styles/main.scss";
import * as helloStyles from "./hello.scss";
import { Counter } from "./Counter";
import { SFCSpreadAttributes } from "./SpreadAttributes";

export interface HelloProps {
  compiler: String;
  framework: String;
}
const Hello = (props: HelloProps) => (
  <h1 className={mainStyles.example}>
    Hello from <p className={helloStyles.firstTitle}>{props.compiler}</p> and{" "}
    <p className={helloStyles.secondTitle}>{props.framework}</p>!
    <Counter
      label="ButtonLabel"
      count={1}
      onIncrement={() => console.log("increment")}
    />
    <SFCSpreadAttributes className={helloStyles.firstTitle}>
      {`I'll spread everything you give me!`}
    </SFCSpreadAttributes>
  </h1>
);

// Export this way for React DevTools
export { Hello };
