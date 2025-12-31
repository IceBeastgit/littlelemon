import { initializeTimes, updateTimes } from "./timesReducer";
import { fetchAPI } from "../api";

// Mock the API
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Booking times reducer", () => {
  test("initializeTimes returns available times from API", () => {
    // Arrange
    fetchAPI.mockReturnValue(["17:00", "18:00"]);

    // Act
    const times = initializeTimes();

    // Assert
    expect(times.length).toBeGreaterThan(0);
    expect(fetchAPI).toHaveBeenCalled();
  });
  test("updateTimes returns available times for selected date", () => {
    // Arrange
    fetchAPI.mockReturnValue(["19:00", "20:00"]);

    const state = [];
    const action = {
      type: "dateChanged",
      date: "2025-12-10",
    };

    // Act
    const result = updateTimes(state, action);

    // Assert
    expect(result).toEqual(["19:00", "20:00"]);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-12-10"));
  });
});
