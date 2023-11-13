import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import DetailedItem from './components/DetailedItem/DetailedItem';
import Cart from './components/Cart/Cart';
import OfferPage from './pages/OfferPage/OfferPage';
import AdminMainPage from './pages/AdminMainPage/AdminMainPage';
import AddItemPage from './pages/AddItemPage/AddItemPage';
import LoginPage from './pages/LoginPage/LoginPage';
import GiveawayPage from './pages/GiveawayPage/GiveawayPage';
import GiveawayResult from './pages/GiveawayResult/GiveawayResult';

function App() {
  const [onClickItem, setOnClickItem] = React.useState(false);
  const [onClickCart, setOnClickCart] = React.useState(false);
  
  return (
    <div className="App" >
      {onClickCart ? <Cart setOnClickCart={setOnClickCart}/> : null}
      {onClickItem ? <DetailedItem onClickItem={onClickItem} setOnClickItem={setOnClickItem}/> : null}
      <Header setOnClickCart={setOnClickCart}/>
      <Routes>
        <Route path="/" element={<Main setOnClickItem={setOnClickItem} />}/>
        <Route exact path="/giveaway" element={<GiveawayPage />}/>
        <Route exact path="/admin/giveaway-result" element={<GiveawayResult />}/>
        <Route exact path="/info" element={<OfferPage />}/>
        <Route exact path='/admin' element={<AdminMainPage />}/>
        <Route exact path='/add-item' element={<AddItemPage />}/>
        <Route exact path='/login' element={<LoginPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
