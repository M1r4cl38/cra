import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
