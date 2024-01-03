import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import katie from './images/katie-zaferes.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
         img = {katie}
         rating = "5.0"
         reviewCount = {6}
         country = "USA"
         title = "Life lessons with Katie"
         price = {136}
       />

    </div>
  );
}

export default App;
