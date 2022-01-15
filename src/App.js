import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

import './App.css';
function App() {
  return (
    <div className="App">
      <div className="Card--Container">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
