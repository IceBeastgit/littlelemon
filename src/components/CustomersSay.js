import user1 from "../assets/Alex.jpg";
import user2 from "../assets/Jamie.jpg";
import user3 from "../assets/Morgan.jpg";
import user4 from "../assets/Taylor.jpg";

function CustomersSay() {
  const testimonials = [
    { name: "Alex", review: "Amazing food!", image: user1 },
    { name: "Jamie", review: "Loved the atmosphere.", image: user2 },
    { name: "Morgan", review: "Best Mediterranean food.", image: user3 },
    { name: "Taylor", review: "Highly recommend!", image: user4 },
  ];

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
  <h2 id="testimonials-heading">Testimonials</h2>

  <div className="testimonials-grid">
    {testimonials.map((item) => (
      <article className="testimonial-card" key={item.name}>
        <p className="rating">Rating</p>
        <img src={item.image} alt={`${item.name} avatar`} />
        <h4>{item.name}</h4>
        <p>{item.review}</p>
      </article>
    ))}
  </div>
</section>

  );
}

export default CustomersSay;
