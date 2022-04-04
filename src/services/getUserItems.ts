import {API} from "../constants";
import getUrl from "../utils/getUrl";
import { Roles } from "../constants";

export interface IItem {
  id: string,
  name: string,
  role: Roles,
  email: string,
  createdAt: string,
}

const getUserItems = async (userId?: string): Promise<Array<IItem>> => {
  const url = getUrl(API.Items, {
    userId,
  });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });

  const data = await response.json();

  return data.items;
};

export default getUserItems;
