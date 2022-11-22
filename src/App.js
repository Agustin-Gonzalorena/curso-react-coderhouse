/* import React from "react"; */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}

export default App;
