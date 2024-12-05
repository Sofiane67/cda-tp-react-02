import logo from './logo.svg';
import './App.css';
import Compteur from './components/Compteur/Compteur';
import Diaporama from './components/Diaporama/Diaporama';
import LikeAndDislike from './components/LikeAndDislike/LikeAndDislike';

function App() {
  return (
    <div className="App">
      <h1>TP REACT</h1>
      <h2>Compteur de clic</h2>
      <Compteur/>
      <h2>Diaporama</h2>
      <Diaporama/>
      <h2>Compteur de like et de dislike</h2>
      <LikeAndDislike/>
    </div>
  );
}

export default App;
