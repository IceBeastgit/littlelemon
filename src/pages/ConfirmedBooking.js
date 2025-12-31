import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state;

  return (
    <section className="confirmation">
      <div className="confirmation-card">
        <h1>Booking Confirmed 🎉</h1>

        <p>Your table has been successfully reserved.</p>

        {booking && (
          <div className="confirmation-details">
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>
            <p><strong>Occasion:</strong> {booking.occasion}</p>
          </div>
        )}

        <Link to="/" className="confirmation-button" aria-label="On Click">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
