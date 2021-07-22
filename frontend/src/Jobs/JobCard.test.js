import React from "react";
import { render } from "@testing-library/react";
import Card from "./JobCard";
import { MemoryRouter } from "react-router";
import UserContext from "../Context/userContext";

it("matches snapshot", function () {
  const testFunc = jest.fn();
  const set1 = new Set();
  const info = jest.fn(() => 123);
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider
        value={{ currentUser: testFunc, applicationIds: set1 }}
      >
        <Card info={info} />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
