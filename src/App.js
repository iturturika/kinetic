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
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  const [onClickItem, setOnClickItem] = React.useState(false);
  const [onClickCart, setOnClickCart] = React.useState(false);
  
  return (
    <div className="App" >
      {onClickCart ? <Cart setOnClickCart={setOnClickCart}/> : null}
      {onClickItem ? <DetailedItem onClickItem={onClickItem} setOnClickItem={setOnClickItem}/> : null}

      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route exact path="/shop" element={<><Header/><Main setOnClickItem={setOnClickItem} /></>}/>
        <Route exact path="/giveaway" element={<><Header/><GiveawayPage /> </>}/>
        <Route exact path="/admin/giveaway-result" element={<><Header/><GiveawayResult /> </>}/>
        <Route exact path="/info" element={<><Header/><OfferPage /> </>}/>
        <Route exact path='/admin' element={<><Header/><AdminMainPage /> </>}/>
        <Route exact path='/add-item' element={<><Header/><AddItemPage /> </>}/>
        <Route exact path='/login' element={<><Header/><LoginPage /> </>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
