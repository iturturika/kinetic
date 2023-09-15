import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import DetailedItem from './components/DetailedItem/DetailedItem';

function App() {
  const [onClickItem, setOnClickItem] = React.useState(false)
  return (
    <div className="App">
      <Header />
      {onClickItem ? <DetailedItem setOnClickItem={setOnClickItem}/> : <></>}
      <Routes>
        <Route path="/" element={<Main setOnClickItem={setOnClickItem}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
