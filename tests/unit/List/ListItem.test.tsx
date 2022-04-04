import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Roles } from "../../../src/constants";

import ListItem from "../../../src/components/UsersManagement/components/List/components/ListItem";

import ItemIcon from "../../../src/components/UsersManagement/components/List/components/ItemIcon";


describe("<ListItem />", () => {

  it("List Item", () => {

    const item = {
      id: "001",
      name: "Jonas Jonaitis",
      role: Roles.amin,
      email: "email123",
      createdAt: new Date().toISOString()
    };
    render(
      <ListItem item={item}/>
    );

    const nameDisplayed = screen.getByText("Jonas Jonaitis");
    expect(nameDisplayed).toBeDefined();

    const emailDisplayed = screen.getByText("email123");
    expect(emailDisplayed).toBeDefined();

    const nameIcon = screen.queryByTestId("icon");
    expect(nameIcon).toBeDefined();

    const updateEmailButton = screen.getByText("Update Email");
    expect(updateEmailButton).toBeDefined();
    userEvent.click(updateEmailButton);
    const modalOpened = screen.queryByTestId("modalInside");
    expect(modalOpened).not.toBeNull();
  });

  it("Item Icon",() => {
    render(
      <ItemIcon name="Volodimiras Zelenskis"/>
    );

    const firstTwoLetterOfName = screen.getByText("Vo");
    expect(firstTwoLetterOfName).toBeDefined();
  });


});
