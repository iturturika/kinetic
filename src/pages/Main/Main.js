import React from 'react'
import './Main.scss';
import Item from '../../components/Item/Item';

const Main = ({setOnClickItem}) => {
  return (
    <aside className='main-wrap'>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
      <Item setOnClickItem={setOnClickItem}/>
   
    </aside>
  )
}

export default Main
