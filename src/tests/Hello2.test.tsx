import * as React from "react";
import * as enzyme from "enzyme";
import Hello2 from "../components/Hello2";

it("renders the correct text when no enthusiasm level is given", () => {
  const hello = enzyme.shallow(<Hello2 name="Chris" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Chris!");
});

it("renders the correct text with an explicit enthusiasm of 1", () => {
  const hello = enzyme.shallow(<Hello2 name="Chris" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Chris!");
});

it("renders the correct text with an explicit enthusiasm level of 5", () => {
  const hello = enzyme.shallow(<Hello2 name="Chris" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Chris!!!!!");
});

it("throws when the enthusiasm level is 0", () => {
  expect(() => {
    enzyme.shallow(<Hello2 name="Chris" enthusiasmLevel={0} />);
  }).toThrow();
});

it("throws when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello2 name="Chris" enthusiasmLevel={-1} />);
  }).toThrow();
});
