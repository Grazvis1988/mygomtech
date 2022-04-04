import { employees } from "../data";

const items = [];

export const updateItem = (item) => {
  items.push(item);
};

export const getItems = () => {
  return employees.map((userItem) => {
    const updatedItem = items.find(({ id }) => id === userItem.id);

    return {
      ...(updatedItem || userItem),
    };
  });
};



