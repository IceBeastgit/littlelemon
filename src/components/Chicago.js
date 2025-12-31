import restaurant1 from "../assets/Mario and Adrian b.jpg";
import restaurant2 from "../assets/restaurant chef B.jpg";

function Chicago() {
  return (
    <section className="about" aria-labelledby="about-heading">
  <div className="about-text">
    <h2 id="about-heading">Little Lemon</h2>
    <h3>Chicago</h3>
    <p>
      Little Lemon is a family owned Mediterranean restaurant, focused on
      traditional recipes served with a modern twist.
    </p>
  </div>

  <div className="about-images">
    <img src={restaurant1} alt="Restaurant interior" />
    <img src={restaurant2} alt="Chefs cooking" />
  </div>
</section>
  );
}

export default Chicago;
