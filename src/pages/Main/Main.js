import React from 'react'
import './Main.scss';
import Item from '../../components/Item/Item';
import axios from 'axios';

const Main = ({setOnClickItem}) => {
  const [items, setItems] = React.useState(false);
  
  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + `/items?status=APROVED&title=&categories=&label=`);
        setItems(res.data);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, []);

  return (
    <div className='main-wrap'>
      {
        items ? 
        items.map((item) => {
          return <Item key={item._id} id={item._id} setOnClickItem={setOnClickItem} title={item.title} price={item.price} image={process.env.REACT_APP_BE_URL + '/' + item.imagePaths[0]}/>
        }) : null
      }
    </div>
  )
}

export default Main
