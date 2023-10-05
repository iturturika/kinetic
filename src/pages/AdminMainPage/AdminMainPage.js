import React from 'react'
import './AdminMainPage.scss'
import AdminItem from '../../components/AdminItem/AdminItem'
import axios from 'axios'
import LoginPage from '../LoginPage/LoginPage'

const AdminMainPage = () => {
  const [items, setItem] = React.useState([]);
  const [accessToken, setAccessToken] = React.useState(sessionStorage.getItem('accessToken'));

  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + '/items?title=&categories=&label=&status=');
        setItem(res.data);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, [])
  return (
      accessToken ?
        <div className='admin-main-page-wrap'>
          {
            items ? items.map((item) => {
              return <AdminItem 
                key={item._id} 
                id={item._id} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                categories={item.categories} 
                label={item.label} 
                status={item.status} 
                imagePaths={item.imagePaths} 
                instagramUrl={item.instagramUrl} 
                size={item.size}
              />
            }) : null
          }
        </div>
      :
      <LoginPage setAccessToken={setAccessToken}/>
  )
}

export default AdminMainPage
