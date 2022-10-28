import NavBar from "./components/NavBar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import thisData from './data'

function App() {
  const cards = thisData.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        rev={item.stats.reviewCount}
        country={item.stats.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">
       {cards}
      </section>
    </div>
  );
}

export default App;
