import React from 'react'
import './AdminItem.scss'
import axios from 'axios'

const AdminItem = ({title, id, description, price, imagePaths, label, categories, instagramUrl, size, status}) => {

  const [titleInput, setTitleInput] = React.useState(title);
  const [descriptionInput, setDescriptionInput] = React.useState(description);
  const [priceInput, setPriceInput] = React.useState(price);
  const [labelInput, setLabelInput] = React.useState(label);
  const [categoriesInput, setCategoriesInput] = React.useState(categories);
  const [instagramUrlInput, setInstagramUrlInput] = React.useState(instagramUrl);
  const [sizeInput, setSizeInput] = React.useState(size);
  const [statusInput, setStatusInput] = React.useState(status);
  const formData = new FormData();

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(process.env.REACT_APP_BE_URL + '/items/' + id);
      if(res.status === 200) {
        alert('Успешно удаленно');
      }
    } catch (err) {
      return err;
    }
  };

  const updateItem = async (id, event) => {
    try {
      event.preventDefault();
      formData.append('title', titleInput);
      formData.append('description', descriptionInput);
      formData.append('price', priceInput);
      formData.append('size', sizeInput);
      formData.append('label', label);
      formData.append('categories', categoriesInput);
      formData.append("instagramUrl", instagramUrlInput);
      formData.append("status", statusInput);
      const res = await axios.patch(process.env.REACT_APP_BE_URL + '/items/' + id, formData);
      if(res.status === 200) {
        alert('Успешно изминенно');
        formData.delete('title');
        formData.delete('description');
        formData.delete('price');
        formData.delete('size');
        formData.delete('label');
        formData.delete('categories');
        formData.delete("instagramUrl");
        formData.delete("status");
      }
    } catch (err) {
      return err;
    }
  }

  return (
    <div className='admin-item'>
      <div className='admin-item-galery'>
        {
          imagePaths.map((image) => {
            return <div className='admin-item-image' key={image}><img src={process.env.REACT_APP_BE_URL + '/' + image} alt='add'></img></div>
          })
        }
      </div>
      <div className='admin-item-info'>
        <div className='admin-item-input'>
            <label>Title:</label>
            <input placeholder='...' value={titleInput} onChange={(event) => {setTitleInput(event.target.value)}}></input>
        </div>
        <div className='admin-item-input'>
            <label>Price:</label>
            <input placeholder='...' value={priceInput} onChange={(event) => {setPriceInput(event.target.value)}}></input>
        </div>
        <div className='admin-item-input'>
            <label>Size:</label>
            <input placeholder='...' value={sizeInput} onChange={(event) => {setSizeInput(event.target.value)}}></input>
        </div>
        <div className='admin-item-input'>
            <label>Description:</label>
            <textarea placeholder='...' value={descriptionInput} onChange={(event) => {setDescriptionInput(event.target.value)}}></textarea>
        </div>
        <div className='admin-item-input'>
            <label>InstagramUrl:</label>
            <input placeholder='...' value={instagramUrlInput} onChange={(event) => {setInstagramUrlInput(event.target.value)}}></input>
        </div>
        <div className='admin-item-input'>
            <label>Categories:</label>
            <select onChange={(event) => {setCategoriesInput(event.target.value)}}>
                <option value={categoriesInput}>{categoriesInput}</option>
            </select>
        </div>
        <div className='admin-item-input'>
            <label>Label:</label>
            <select onChange={(event) => {setLabelInput(event.target.value)}}>
                <option value={labelInput}>{labelInput}</option>
            </select>
        </div>
        <div className='admin-item-input'>
            <label>Status:</label>
            <select onChange={(event) => {setStatusInput(event.target.value)}}>
                {
                  status === 'WAITING' ?
                    <>
                      <option value={statusInput}>{statusInput}</option>
                      <option value={"APROVED"}>APROVED</option>
                    </>
                  :
                    <>
                      <option value={statusInput}>{statusInput}</option>
                      <option value={"WAITING"}>WAITING</option>
                    </>
                }
            </select>
        </div>
        <div className='admin-item-comtrols'>
            <button className='admin-item-controls-delete-button' onClick={() => {deleteItem(id)}}>Delete</button>
            <button className='admin-item-controls-save-button' onClick={(event) => {updateItem(id, event)}}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default AdminItem
