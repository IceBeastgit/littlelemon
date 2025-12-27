import logo from "./assets/Logo.svg";
function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <section>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </section>

      <section>
        <h4>Social Media Links</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </section>
    </footer>
  );
}

export default Footer;
