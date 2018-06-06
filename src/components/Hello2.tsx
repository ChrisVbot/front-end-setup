import * as React from "react";
import * as styles from "./hello.scss";

export interface Props {
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
}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error(`You should be more enthusiastic`);
  }

  return (
    <div className={styles.firstTitle}>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
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
