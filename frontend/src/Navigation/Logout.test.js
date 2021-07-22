import React from "react";
import { render } from "@testing-library/react";
import Logout from "./Logout";
import { MemoryRouter } from "react-router";
import UserContext from "../Context/userContext";

it("matches snapshot", function () {
  const testFunc = jest.fn();
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser: testFunc }}>
        <Logout />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
