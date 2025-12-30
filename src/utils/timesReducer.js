import { fetchAPI } from "../api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "dateChanged") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};
