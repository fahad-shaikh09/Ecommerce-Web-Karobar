import React from 'react';
import './App.css';
import Navbar from "./components/Navbar" 
import Categories from "./components/Categories" 
import Animation from "./components/Animation" 
import Products from "./components/Products" 
import Footer from "./components/Footer" 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Animation />
      <h1>Welcome to Karobar</h1>
      <p> Ab hua asaan Karobar!</p>
      <Products />
      <h1>Featured products</h1>
      <Footer />
    </div>
  );
}

export default App;
