import React from 'react'
import './AddItemPage.scss'
import axios from 'axios'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

const AddItemPage = () => {

const [title, setTitle] = React.useState('');
const [description, setDescription] = React.useState('');
const [price, setPrice] = React.useState('');
const [size, setSize] = React.useState('');
const [label, setLabel] = React.useState('');
const [categories, setCategories] = React.useState('');
const [image1, setImage1] = React.useState(null);
const [image2, setImage2] = React.useState(null);
const [image3, setImage3] = React.useState(null);
const [image4, setImage4] = React.useState(null);

const formData = new FormData();

const addItem = async (event) => {
    try {
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('size', size);
        formData.append('label', label);
        formData.append('categories', categories);
        formData.append("instagramUrl", "https://instagram.com/kinetic.store.md");
        formData.append("images", image1);
        formData.append("images", image2);
        formData.append("images", image3);
        formData.append("images", image4);
        event.preventDefault();
        const res = await axios.post(process.env.REACT_APP_BE_URL + '/items', formData);
        console.log(res);
    } catch (err) { 
        return err
    }
};

return (
    <div className='add-item-page-wrap'>
        <form className='add-item'>
            <div className='add-item-galery'>
                <ImageUpload inputName={'input1'} setImage={setImage1} image={image1}/>
                <ImageUpload inputName={'input2'} setImage={setImage2} image={image2}/>
                <ImageUpload inputName={'input3'} setImage={setImage3} image={image3}/>
                <ImageUpload inputName={'input4'} setImage={setImage4} image={image4}/>
            </div>
            <div className='add-item-info'>
                <div className='add-item-input'>
                    <label>Название:</label>
                    <input placeholder='...' value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
                </div>
                <div className='add-item-input'>
                    <label>Цена:</label>
                    <input placeholder='...' value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                </div>
                <div className='add-item-input'>
                    <label>Размер:</label>
                    <select onChange={(event) => {setSize(event.target.value)}}>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="36">EU - 36</option>
                        <option value="37">EU - 37</option>
                        <option value="38">EU - 38</option>
                        <option value="39">EU - 39</option>
                        <option value="40">EU - 40</option>
                        <option value="41">EU - 41</option>
                        <option value="42">EU - 42</option>
                        <option value="43">EU - 43</option>
                        <option value="44">EU - 44</option>
                        <option value="45">EU - 45</option>
                        <option value="46">EU - 46</option>
                        <option value="48">EU - 47</option>
                        <option value="48">EU - 48</option>
                    </select>
                </div>
                <div className='add-item-input'>
                    <label>Описание:</label>
                    <textarea placeholder='...' value={description} onChange={(event) => {setDescription(event.target.value)}}></textarea>
                </div>
                <div className='add-item-input'>
                    <label>Метка:</label>
                    <select onChange={(event) => {setLabel(event.target.value)}}>
                        <option value="LEGIT">Оригинал</option>
                        <option value="NONE">без метки</option>
                    </select>
                </div>
                <div className='add-item-input'>
                    <label>Категория:</label>
                    <select onChange={(event) => {setCategories(event.target.value)}}>
                        <option value="SWEATER">Свитер</option>
                        <option value="HOODIE">Худи</option>
                        <option value="PANTS">Штаны</option>
                    </select>
                </div>
                <div className='add-item-controls'>
                    <button className='add-item-controls-save-button' onClick={(event) => {addItem(event)}}>Создать</button>
                </div>
            </div>
        </form>
    </div>
)
}

export default AddItemPage
