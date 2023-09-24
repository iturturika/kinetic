import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import DetailedItem from './components/DetailedItem/DetailedItem';
import Cart from './components/Cart/Cart';
import OfferPage from './pages/OfferPage/OfferPage';

function App() {
  const [onClickItem, setOnClickItem] = React.useState(false);
  const [onClickCart, setOnClickCart] = React.useState(false);
  
  return (
    <div className="App" >
      {onClickCart ? <Cart setOnClickCart={setOnClickCart}/> : null}
      {onClickItem ? <DetailedItem setOnClickItem={setOnClickItem}/> : null}
      <Header setOnClickCart={setOnClickCart}/>
      <Routes>
        <Route path="/" element={<Main setOnClickItem={setOnClickItem} />}/>
        <Route path="/info" element={<OfferPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
