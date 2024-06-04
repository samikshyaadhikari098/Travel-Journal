import './App.css';
import Navbar from './components/nav';
import Main from './components/main';
import data from './database';

function App() {
  const myData = data.map((item) =>{
    return (
      <Main
      item = {item}
      
      />
    )
  })







  return (
    <div className="App">
      <Navbar/>
      <section className="cards-list">
        {myData}
      </section>

    </div>
  );
}

export default App;
