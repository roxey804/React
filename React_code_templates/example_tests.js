import React from "react";
import { render, cleanup } from "@testing-library/react";
//import your component:
import Header from "../components/pages/Header";

//cleanup after each test
afterEach(cleanup);
//--------------Tests here --------------------------//

//test that inserts "Hello" into your component and then checks it exists
it("name of my test", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);

  //ensure you label your element data-testid="h1tag"
  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("fancy-h1");
});

//Test that checks for "Super" in the <p> element
it("TEST 2", () => {
  const { getByTestId} = render(<Header text="Hello!" />);

  expect(getByTestId("ptag")).toHaveTextContent("Super");
});

//This test uses the inbuilt debug function that prints out all the HTML/JSX? in the console
test('TEST3', () => {
  const { debug } = render(
      <Header />
  );
 debug();
});


test('on page load router selection active', () => {
  const { getbysomething } = render(
    <Component to be rendered />
  );
  expect select first step to have class active?
  expect(getByText("View previous tasks!")).toHaveClass("active");
})