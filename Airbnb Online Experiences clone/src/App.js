// importing styles and components 
import React from "react";
import "./style.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

// App component
function App() {

  // looping throught the array using map
  const cards = data.map(item => {
    return (
      // rendering App component
      <Card
          // passing data 
          key={item.id}
          item = {item}
      />
    )
  })

  return (
    // rendering Navbar, Hero, cards
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
