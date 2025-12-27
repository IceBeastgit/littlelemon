import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <div className="app-layout">
      <div className="header-nav">
        <Header />
        <Nav />
      </div>
      <main />
      <Footer />
    </div>
  );
}

export default App;
