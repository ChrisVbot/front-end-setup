import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello2 from "./containers/Hello2";
import { enthusiasm } from "./reducers/index";
import * as styles from "./styles/main.scss";
// import { Hello } from "./components/Hello";

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line:no-console
  console.log("Looks like we are in development mode!");
}

// tslint:disable-next-line:interface-name
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
