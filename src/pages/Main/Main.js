import React from 'react'
import './Main.scss';
import Item from '../../components/Item/Item';
import axios from 'axios';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';

const Main = ({setOnClickItem}) => {
  const [items, setItems] = React.useState(false);
  const [categories, setCategories] = React.useState('');
  const [label, setLabel] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [titleInput, setTitleInput] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + `/items?title=${title}&categories=${categories}&label=${label}&status=APROVED`);
        setItems(res.data);
        setLoading(false);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, [title, categories, label]);

  return (
    <div className='main-wrap' style={items.length === 0 ? {justifyContent: 'center', alignItems: 'center'} : null}>
      <div className='category-wrap'>
        <Search setTitle={setTitle} titleInput={titleInput} setTitleInput={setTitleInput}/>
        <CategoryButton nameCategory={'Батники'} value={'HOODIE'} setCategories={setCategories} style={categories === 'HOODIE' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Свитера'} value={'SWEATER'} setCategories={setCategories} style={categories === 'SWEATER' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Зипки'} value={'ZIPUP'} setCategories={setCategories} style={categories === 'ZIPUP' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Штаны'} value={'PANTS'} setCategories={setCategories} style={categories === 'PANTS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Джинсы'} value={'JEANS'} setCategories={setCategories} style={categories === 'JEANS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Лонгсливы'} value={'LONGSLIVE'} setCategories={setCategories} style={categories === 'LONGSLIVE' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Футболки'} value={'TSHIRT'} setCategories={setCategories} style={categories === 'TSHIRT' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Шорты'} value={'SHORTS'} setCategories={setCategories} style={categories === 'SHORTS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Кроссовки'} value={'SNEAKERS'} setCategories={setCategories} style={categories === 'SNEAKERS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Куртки'} value={'JACKET'} setCategories={setCategories} style={categories === 'JACKET' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Ветровки'} value={'WINDBREAKER'} setCategories={setCategories} style={categories === 'WINDBREAKER' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Акссесуары'} value={'ACCESSORIES'} setCategories={setCategories}style={categories === 'ACCESSORIES' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null} />
        <CategoryButton nameCategory={'Ботинки'} value={'BOOTS'} setCategories={setCategories} style={categories === 'BOOTS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Рюкзаки'} value={'BAG'} setCategories={setCategories} style={categories === 'BAG' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        <CategoryButton nameCategory={'Мессенджеры'} value={'MESSENGERS'} setCategories={setCategories} style={categories === 'MESSENGERS' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
        {/* <CategoryButton nameCategory={'Оригинал'} value={'LEGIT'} setCategories={setLabel} style={label === 'LEGIT' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/> */}
        <div className='category-button' onClick={() => {setCategories(''); setTitle(''); setTitleInput(''); setLabel('')}}>
          <p>Сбросить</p>
        </div>
      </div>
      {
        items.length > 0 ? 
        items.map((item) => {
          return <Item key={item._id} id={item._id} setOnClickItem={setOnClickItem} title={item.title} price={item.price} label={item.label} image={process.env.REACT_APP_BE_URL + '/' + item.imagePaths[0]}/>
        }) :  <div style={{fontSize: 16, textAlign: 'center', height: 400, display: 'flex', alignItems: 'center', margin: '0 auto'}}> {loading ? <Loader /> : <p>Ничего не найденно</p>}</div>
      }
    </div>
  )
}

export default Main
