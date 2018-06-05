import * as React from "react";

export interface SFCCounterProps {
  label: string;
  count: number;
  onIncrement: () => any;
}

const Counter: React.SFC<SFCCounterProps> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
        <button type="button" onClick={handleIncrement}>{`Increment`}</button>
      </span>
    </div>
  );
};

export { Counter };
