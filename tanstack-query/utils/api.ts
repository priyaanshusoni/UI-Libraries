import { apiClient } from "./apiClient";

const TODO_API = apiClient({
  config: {
    baseURL: "https://jsonplaceholder.typicode.com/todos",
  },
});

export const API_MANAGER = {
  fetchTodos: () => TODO_API.get("/"),
};
