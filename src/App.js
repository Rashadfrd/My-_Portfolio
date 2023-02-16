import './App.scss'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Layout from './pages/Layout';

function App() {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
    </main>
  );
}

export default App;
