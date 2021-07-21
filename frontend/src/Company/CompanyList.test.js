import React from "react";
import { render } from "@testing-library/react";
import Companies from "./CompanyList";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Companies />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
