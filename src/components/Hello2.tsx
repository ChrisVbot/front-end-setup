import * as React from "react";
import { Hello } from "./Hello";
import * as styles from "./hello.scss";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello2({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error(`You should be more enthusiastic`);
  }

  return (
    <div className={styles.firstTitle}>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        {/* <Hello compiler="TypeScript in Docker!" framework="React" /> */}
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello2;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
