import React from "react";
import { render } from "@testing-library/react";
import Companies from "./CompanyList";
import { MemoryRouter } from "react-router";
import UserContext from "../Context/userContext";

it("matches snapshot", function () {
  const testFunc = jest.fn();
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser: testFunc }}>
        <Companies />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
