import React from 'react'
import './AdminMainPage.scss'
import AdminItem from '../../components/AdminItem/AdminItem'
import plusImage from '../../assets/img/plusImg.svg'

const AdminMainPage = () => {
  return (
    <div className='admin-main-page-wrap'>
      <AdminItem />
      <AdminItem />
      <AdminItem />
      <AdminItem />
      <AdminItem />
      <AdminItem />
      <div className='admin-add-item-button'>
        <img src={plusImage} alt='add'></img>
      </div>
    </div>
  )
}

export default AdminMainPage
