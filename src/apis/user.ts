import { FETCH_USERS_API } from "../constants";

import type { User } from "../types";

export const fetchUsers = async (count = 100) => {
  if (count === 0) {
    return [];
  }

  if (count < 0) {
    throw new Error("Count must be a positive number");
  }

  try {
    const data = await fetch(`${FETCH_USERS_API}/?results=${count}`);
    const result = await data.json();
    return result.results as User[];
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
