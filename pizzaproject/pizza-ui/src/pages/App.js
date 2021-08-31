import { Component } from 'react';
import './pages.css'
import TitlebarImageList from '../components/GridListImg';
import imagem from './pizza.jpg'
import HeaderApp from '../components/header'



class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderApp></HeaderApp>
        <div>
          <img src={imagem} alt='foto de pizza'></img>
          <TitlebarImageList></TitlebarImageList>
        </div>
      </div >
    );
  }
}
export default App;