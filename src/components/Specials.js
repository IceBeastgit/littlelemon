import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      image: greekSalad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      image: bruschetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      image: lemonDessert,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="specials" aria-labelledby="specials-heading">
  <div className="specials-header">
    <h2 id="specials-heading">This Week’s Specials!</h2>
    <button className="specials-button" aria-label="On Click">
      Online Menu
    </button>
  </div>

  <div className="specials-grid">
    {specials.map((item) => (
      <article className="special-card" key={item.title}>
        <img src={item.image} alt={item.title} />

        <div className="special-card-header">
          <h3>{item.title}</h3>
          <span>{item.price}</span>
        </div>

        <p>{item.description}</p>
        <p className="order-link">Order a delivery</p>
      </article>
    ))}
  </div>
</section>

  );
}

export default Specials;
