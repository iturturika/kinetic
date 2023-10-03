import React from 'react'
import './AdminMainPage.scss'
import AdminItem from '../../components/AdminItem/AdminItem'
import axios from 'axios'

const AdminMainPage = () => {
  const [items, setItem] = React.useState([]);
  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + '/items?title=&categories=&label=&status=');
        setItem(res.data);
        console.log(res.data);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, [])
  return (
    <div className='admin-main-page-wrap'>
      {
        items ? items.map((item) => {
          return <AdminItem key={item._id} id={item._id} title={item.title} description={item.description} price={item.price} categories={item.categories} label={item.label} status={item.status} imagePaths={item.imagePaths} instagramUrl={item.instagramUrl} size={item.size}/>
        }) : null
      }
    </div>
  )
}

export default AdminMainPage
