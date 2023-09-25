import React from 'react'
import './AdminItem.scss'
import addImage from '../../assets/img/plusImg.svg'
import itemImage from '../../assets/img/itemImg1.jpg'

const AdminItem = () => {
  return (
    <div className='admin-item'>
      <div className='admin-item-galery'>
        <div className='admin-item-image'><img src={itemImage} alt='add'></img></div>
        <div className='admin-item-image'><img src={addImage} alt='add'></img></div>
        <div className='admin-item-image'><img src={addImage} alt='add'></img></div>
        <div className='admin-item-image'><img src={addImage} alt='add'></img></div>
      </div>
      <div className='admin-item-info'>
        <div className='admin-item-input'>
            <label>Title:</label>
            <input placeholder='...'></input>
        </div>
        <div className='admin-item-input'>
            <label>Price:</label>
            <input placeholder='...'></input>
        </div>
        <div className='admin-item-input'>
            <label>Size:</label>
            <input placeholder='...'></input>
        </div>
        <div className='admin-item-input'>
            <label>Description:</label>
            <textarea placeholder='...'></textarea>
        </div>
        <div className='admin-item-input'>
            <label>Status:</label>
            <select>
                <option value="stock">Stock</option>
                <option value="out-of-stock">Out of stock</option>
            </select>
        </div>
        <div className='admin-item-comtrols'>
            <button className='admin-item-controls-delete-button'>Delete</button>
            <button className='admin-item-controls-save-button'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AdminItem
