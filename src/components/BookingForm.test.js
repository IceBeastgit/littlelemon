import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";


test("renders the Choose date label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
const mockProps = {
  availableTimes: ["17:00", "18:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};
test("Date input has required attribute", () => {
  render(<BookingForm {...mockProps} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});
test("Time select has required attribute", () => {
  render(<BookingForm {...mockProps} />);

  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute("required");
});
test("Guests input has min and max attributes", () => {
  render(<BookingForm {...mockProps} />);

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});
test("Occasion select has required attribute", () => {
  render(<BookingForm {...mockProps} />);

  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});
test("Submit button is disabled when form is invalid", () => {
  render(<BookingForm {...mockProps} />);

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(submitButton).toBeDisabled();
});
test("Submit button is enabled when form is valid", () => {
  render(<BookingForm {...mockProps} />);

  userEvent.type(
    screen.getByLabelText(/choose date/i),
    "2025-12-10"
  );

  userEvent.selectOptions(
    screen.getByLabelText(/choose time/i),
    "17:00"
  );

  userEvent.clear(
    screen.getByLabelText(/number of guests/i)
  );

  userEvent.type(
    screen.getByLabelText(/number of guests/i),
    "2"
  );

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(submitButton).toBeEnabled();
});
