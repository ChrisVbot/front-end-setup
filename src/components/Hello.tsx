import * as React from "react";
import * as mainStyles from "../styles/main.scss";
import { Counter } from "./Counter";
import "./hello.scss";
import * as helloStyles from "./hello.scss";
import { SFCSpreadAttributes } from "./SpreadAttributes";

export interface IHelloProps {
  compiler: string;
  framework: string;
}
const Hello = (props: IHelloProps) => (
  <h1 className={mainStyles.example}>
    Hello from <p className={helloStyles.firstTitle}>{props.compiler}</p> and{" "}
    <p className={helloStyles.secondTitle}>{props.framework}</p>!
    <Counter
      label="ButtonLabel"
      count={1}
      // tslint:disable-next-line:no-console
      onIncrement={() => console.log("increment")}
    />
    <SFCSpreadAttributes className={helloStyles.firstTitle}>
      {`I'll spread everything you give me!`}
    </SFCSpreadAttributes>
  </h1>
);

// Export this way for React DevTools
export { Hello };
