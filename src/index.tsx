import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";

// import { Hello } from "./components/Hello";
import Hello2 from "./containers/Hello2";
import { Provider } from "react-redux";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hello2 />
  </Provider>,
  // type assertion - useful way of telling TS what the real type of an expression
  // is when you know better than the type checker
  document.getElementById("root") as HTMLElement
);
