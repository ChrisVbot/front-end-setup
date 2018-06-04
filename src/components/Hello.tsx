import * as React from "react";
import "./hello.scss";
import * as styles from "../styles/main.scss";

export interface HelloProps {
  compiler: String;
  framework: String;
}

export const Hello = (props: HelloProps) => (
  <h1 className={styles.example}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
