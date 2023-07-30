
import './App.css';
import Navbar from './Navbar'
import Shop from './Shop';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart';
import Join from './join';
import { ShopContextProvider } from './Context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
    <Navbar />
    <Routes>
    <Route path='/' element={ <Shop /> }/>
    <Route path='cart' element={<Cart />}/>
    
    </Routes>
    <Join />
    <Footer />
    </ShopContextProvider>
    </div>
  );
}

export default App;
