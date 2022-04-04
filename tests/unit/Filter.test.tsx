import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";

import Filter from "../../src/components/UsersManagement/components/Filter/Filter";

import {employees} from "../../server/data";

describe("<Filter />", () => {

  it.only("Filter test", () => {

    const root = document.createElement("div");
    document.body.appendChild(root);

    let testHistory, testLocation;

    render(
      <MemoryRouter initialEntries={["/my/initial/route"]}>
        <Filter items={employees} />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    const WrongTab = screen.getByTestId("WrongTab");
    userEvent.click(WrongTab);

    expect(testLocation.pathname).toBe("/items/wrong");

    const allTab = screen.getByTestId("allTab");
    userEvent.click(allTab);

    expect(testLocation.pathname).toBe("/items");

    const reusedTab = screen.getByTestId("ReusedTab");
    userEvent.click(reusedTab);

    expect(testLocation.pathname).toBe("/items/reused");

    const oldTab = screen.getByTestId("OldTab");
    userEvent.click(oldTab);

    expect(testLocation.pathname).toBe("/items/old");
  });


});
