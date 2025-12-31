import { useState } from "react";


function BookingForm({ availableTimes = [], dispatch, submitForm  }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid =
  date &&
  time &&
  guests >= 1 &&
  guests <= 10;

  const handleSubmit = (e) => {
  e.preventDefault();

  if (typeof submitForm === "function") {
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  }
};


  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "dateChanged", date: e.target.value });
        }}
      />

      {/* Time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        aria-label="Select reservation time"
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      {/* Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        required
        aria-label="Number of guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit"
      value="Make Your reservation"
      disabled={!isFormValid}
      aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;
