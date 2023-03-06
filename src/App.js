import logo from './logo.svg';
import './App.css';
// import AppBar from './Components/AppBar';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Astronauts from './Components/Astronauts/Astronauts';

function App() {
  const data ={
    title: 'Hola espacio',
    text: 'Holiii ayuda en el espacio no ha oxigeno'
  }
  return (
    <div className="App">
      <Navbar/>
      <Main {...data} />
      {/* <Main title='Hola espacio' text='Holiii ayuda en el espacio no hay oxigeno'  /> */}
      <Astronauts></Astronauts>
      </div>

  );
}

export default App;
