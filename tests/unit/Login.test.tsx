import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../../src/components/Login/Login";
import userEvent from "@testing-library/user-event";

describe("Login form", () => {
  it("<Login 1 />", async () => {
    const login = jest.fn();

   
    render(
      <MemoryRouter>
        <Login onLogin={login}/>
      </MemoryRouter>
    );

    const username = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");

    const sendButton = screen.getByText("Login");

    userEvent.type(username, "testing a form..." );
    userEvent.type(password, "123456");

    userEvent.click(sendButton);
      
    const correctUsername = screen.queryByText("Minimum 5 characters");

    const badPassword = screen.queryByText("Min 8 characters,");

    expect(correctUsername).toBeNull();
    expect(badPassword).toBeDefined();

    await waitFor(() => {
      expect(login).toHaveBeenCalledTimes(1);
      expect(login.mock.calls[0][0]).toBe("testing a form..." );
      expect(login.mock.calls[0][1]).toBe("123456" );
    });
  });

  it("<Login 2 />", async () => {
    const login = jest.fn();

   
    render(
      <MemoryRouter>
        <Login onLogin={login}/>
      </MemoryRouter>
    );

    const username = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");

    const sendButton = screen.getByText("Login");

    userEvent.type(username, "What");
    userEvent.type(password, "Gau12345.");

    userEvent.click(sendButton);
      
    const correctUsername = screen.queryByText("Minimum 5 characters");

    const badPassword = screen.queryByText("Min 8 characters,");

    expect(correctUsername).toBeDefined();
    expect(badPassword).toBeNull();

    await waitFor(() => {
      expect(login).toHaveBeenCalledTimes(1);
      expect(login.mock.calls[0][0]).toBe("What" );
      expect(login.mock.calls[0][1]).toBe("Gau12345." );

    });
  });

});
