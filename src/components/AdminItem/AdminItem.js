import React from 'react'
import './AdminItem.scss'
import axios from 'axios'

const AdminItem = ({title, id, description, price, imagePaths, label, categories, instagramUrl, size}) => {
  const deleteItem = async (id) => {
    try {
      await axios.delete(process.env.REACT_APP_BE_URL + '/items/' + id);
    } catch (err) {
      return err;
    }
  };

  return (
    <div className='admin-item'>
      <div className='admin-item-galery'>
        {
          imagePaths.map((image) => {
            return <div className='admin-item-image'><img src={process.env.REACT_APP_BE_URL + '/' + image} alt='add'></img></div>
          })
        }
      </div>
      <div className='admin-item-info'>
        <div className='admin-item-input'>
            <label>Title:</label>
            <input placeholder='...' value={title}></input>
        </div>
        <div className='admin-item-input'>
            <label>Price:</label>
            <input placeholder='...' value={price}></input>
        </div>
        <div className='admin-item-input'>
            <label>Size:</label>
            <input placeholder='...' value={size}></input>
        </div>
        <div className='admin-item-input'>
            <label>Description:</label>
            <textarea placeholder='...' value={description}></textarea>
        </div>
        <div className='admin-item-input'>
            <label>InstagramUrl:</label>
            <input placeholder='...' value={instagramUrl}></input>
        </div>
        <div className='admin-item-input'>
            <label>Categories:</label>
            <select>
                <option value={categories}>{categories}</option>
            </select>
        </div>
        <div className='admin-item-input'>
            <label>Label:</label>
            <select>
                <option value={label}>{label}</option>
            </select>
        </div>
        <div className='admin-item-comtrols'>
            <button className='admin-item-controls-delete-button' onClick={() => {deleteItem(id)}}>Delete</button>
            <button className='admin-item-controls-save-button'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AdminItem
