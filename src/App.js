import { Routes, Route, Navigate } from 'react-router-dom';
import Home  from './components/Home';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './components/Admin';

function App() {
  const user = true;
 
  return (
    <div className='App'>
     
      <Header/>
      <Admin />
      <main>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='products' element={<ProductList />} />
          <Route path='products/1001' element={<ProductDetail />} />
          <Route path='contact'element={<Contact />} />
          <Route path='/admin' element={ user ? <admin /> : <Navigate to='/' />} />
        </Routes>
      </main>
    <Footer />
    </div>
    );
}

export default App;
