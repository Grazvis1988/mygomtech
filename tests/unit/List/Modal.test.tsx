import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Roles } from "../../../src/constants";

import UpdateModal from "../../../src/components/UsersManagement/components/List/components/UpdateModal";


describe("<Modal />", () => {

  it("Modal test", () => {

    const item = {
      id: "001",
      name: "Jonas Jonaitis",
      role: Roles.amin,
      email: "email123",
      createdAt: new Date().toISOString()
    };
    render(
      <UpdateModal item={item}/>
    );

    const modalClosed = screen.queryByTestId("modalInside");
    expect(modalClosed).toBeNull();

    const openModalbutton = screen.getByTestId("openModal");
    userEvent.click(openModalbutton);
    const modalIsOpen = screen.getByTestId("modalInside");
    expect(modalIsOpen).toBeDefined();
      
    const closeModal = screen.getByText("Cancel");
    userEvent.click(closeModal);

    const modalIsClosed = screen.queryByTestId("modalInside");
    expect(modalIsClosed).toBeNull();
  });


});
