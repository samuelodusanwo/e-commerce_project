import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { HomePage } from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;