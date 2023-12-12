import { useReducer } from "react";
import { fetchUsers } from "../apis/user";

import type { User } from "../types";

type State = {
  users: User[];
  error: string | null;
};

type Action =
  | { type: "FETCH_USERS_SUCCESS"; payload: User[] }
  | { type: "FETCH_USERS_FAILURE"; payload: string }
  | { type: "REMOVE_USER"; payload: number };

const initialState: State = {
  users: [],
  error: null,
};

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "FETCH_USERS_FAILURE":
      return { ...state, error: action.payload };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const useUserReducer = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUserList = async () => {
    try {
      const userList = await fetchUsers();
      console.log(userList);
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: userList });
    } catch (error) {
      dispatch({
        type: "FETCH_USERS_FAILURE",
        payload: "Error fetching users",
      });
    }
  };

  const removeUser = (index: number) => {
    dispatch({ type: "REMOVE_USER", payload: index });
  };

  return { state, fetchUserList, removeUser };
};

export default useUserReducer;
