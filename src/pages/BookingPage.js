import { useEffect } from "react";
import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  useEffect(() => {
    // Trigger initial load of available times
    dispatch({
      type: "dateChanged",
      date: new Date().toISOString().split("T")[0],
    });
  }, [dispatch]);

  return (
    <section className="booking-section">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
