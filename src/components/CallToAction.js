import heroImage from "../assets/hero.jpg"
function CallToAction() {
  return (
    <section className="cta">
        <div className="cta-text">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button className="cta-button">Reserve a Table</button>
      </div>
      <div className="cta-image">
        <img src={heroImage} alt="Little Lemon Dishes"/>

      </div>
    </section>
  );
}

export default CallToAction;
