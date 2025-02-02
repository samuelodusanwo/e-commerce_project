import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/sign-in' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;