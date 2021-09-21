import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Custom from './pages/Custom';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/custom' component={Custom} />
    </BrowserRouter>
  );
}

export default App;
