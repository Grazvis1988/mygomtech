import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Roles } from "../../../src/constants";

import List from "../../../src/components/UsersManagement/components/List/List";

describe("<ListItem />", () => {

  it("List Item", () => {

    const items = [
      { 
        id: "001",
        name: "Jonas Jonaitis",
        role: Roles.amin,
        email: "email123",
        createdAt: new Date().toISOString()
      },
      {
        id: "002",
        name: "Petras Petraitis",
        role: Roles.write,
        email: "emailas@gmail.com",
        createdAt: new Date().toISOString()
      },
      {
        id: "003",
        name: "Andrius Andraitis",
        role: Roles.read,
        email: "junnyemailname@one.lt",
        createdAt: new Date().toISOString()
      }
    ];
    render(
      <List items={items}/>
    );
        
    const listItems = screen.getAllByTestId("listItem");
    expect(listItems).toBeDefined();
    expect(listItems.length).toBe(3);
  });
});
