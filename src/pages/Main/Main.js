import React from 'react'
import './Main.scss';
import Item from '../../components/Item/Item';

const Main = ({setOnClickItem}) => {
  return (
    <div className='main-wrap'>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
   
    </div>
  )
}

export default Main
