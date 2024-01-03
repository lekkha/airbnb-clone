import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

// import katie from './images/katie-zaferes.png'

function App() {
  const cards = data.map(item => {
    return(
      <Card
      key = {item.id}
      item = {item}
      //to avoid clutter pass the entire item object

      // img = {item.coverImg}
      // rating = {item.stats.rating}
      // reviewCount = {item.stats.reviewCount}
      // country = {item.location}
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
    />

    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--list">
         {cards}
      </section>
    </div>
  );
}

export default App;
