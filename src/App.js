
import './App.css';
import Navbar from './Navbar'
import Shop from './Shop';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart';

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
    
    </ShopContextProvider>
    </div>
  );
}

export default App;
