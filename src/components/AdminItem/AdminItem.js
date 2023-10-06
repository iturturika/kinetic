import React from 'react'
import './AdminItem.scss'
import axios from 'axios'

const AdminItem = ({title, id, description, price, imagePaths, label, categories, instagramUrl, size, status, priority}) => {

  const [titleInput, setTitleInput] = React.useState(title);
  const [descriptionInput, setDescriptionInput] = React.useState(description);
  const [priceInput, setPriceInput] = React.useState(price);
  const [labelInput, setLabelInput] = React.useState(label);
  const [categoriesInput, setCategoriesInput] = React.useState(categories);
  const [instagramUrlInput, setInstagramUrlInput] = React.useState(instagramUrl);
  const [sizeInput, setSizeInput] = React.useState(size);
  const [statusInput, setStatusInput] = React.useState(status);
  const [priorityInput, setPriorityInput] = React.useState(priority);
  const formData = new FormData();

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(process.env.REACT_APP_BE_URL + '/items/' + id, {
        headers: {
          "authorization": 'Bearer ' + sessionStorage.getItem('accessToken')
        }
      });
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
      formData.append("priority", priorityInput);
      const res = await axios.patch(process.env.REACT_APP_BE_URL + '/items/' + id, formData, {
        headers: {
          "authorization": 'Bearer ' + sessionStorage.getItem('accessToken')
        }
      });
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
        formData.delete("priority");
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
                <option value="HOODIE">Батник</option>
                <option value="SWEATER">Свитер</option>
                <option value="ZIPUP">Зипка</option>
                <option value="PANTS">Штаны</option>
                <option value="JEANS">Джинсы</option>
                <option value="LONGSLIVE">Лонгслив</option>
                <option value="TSHIRT">Футболка</option>
                <option value="SHORTS">Шорты</option>
                <option value="SNEAKERS">Кроссовки</option>
                <option value="JACKET">Куртка</option>
                <option value="WINDBREAKER">Ветровка</option>
                <option value="ACCESSORIES">Аксессуары</option>
                <option value="BOOTS">Ботинки</option>
                <option value="BAG">Рюкзак</option>
                <option value="MESSENGERS">Мессенджер</option>
            </select>
        </div>
        <div className='admin-item-input'>
            <label>Label:</label>
            <select onChange={(event) => {setLabelInput(event.target.value)}}>
                <option value={labelInput}>{labelInput}</option>
                <option value="LEGIT" >Оригинал</option>
                <option value="NONE" >без метки</option>
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
        <div className='admin-item-input'>
            <label>Priority:</label>
            <select onChange={(event) => {setPriorityInput(event.target.value)}}>
                {
                  priority === 100 ?
                    <>
                      <option value={priorityInput}>NORMAL</option>
                      <option value={1}>HIGH</option>
                    </>
                  :
                    <>
                      <option value={priorityInput}>HIGH</option>
                      <option value={100}>NORMAL</option>
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
