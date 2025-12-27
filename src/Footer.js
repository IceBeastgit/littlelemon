import logo from "./assets/Logo.svg";
import Nav from "./Nav";
function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <Nav/>

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
