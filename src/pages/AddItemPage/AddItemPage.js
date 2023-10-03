import React from 'react'
import './AddItemPage.scss'
import axios from 'axios'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import checkmarkImage from '../../assets/img/Checkmark.png'
import { Link } from 'react-router-dom'

const AddItemPage = () => {

const [title, setTitle] = React.useState('');
const [description, setDescription] = React.useState('');
const [price, setPrice] = React.useState('');
const [size, setSize] = React.useState('XS');
const [label, setLabel] = React.useState('NONE');
const [categories, setCategories] = React.useState('HOODIE');
const [instagramUrl, setInstagramUrl] = React.useState('');
const [image1, setImage1] = React.useState(null);
const [image2, setImage2] = React.useState(null);
const [image3, setImage3] = React.useState(null);
const [image4, setImage4] = React.useState(null);
const [isSaved, setIsSaved] = React.useState(false);

const formData = new FormData();

const addItem = async (event) => {
    try {


        event.preventDefault();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('size', size);
        formData.append('label', label);
        formData.append('categories', categories);
        formData.append("instagramUrl", instagramUrl);
        formData.append("images", image1);
        formData.append("images", image2);
        formData.append("images", image3);
        formData.append("images", image4);
        const res = await axios.post(process.env.REACT_APP_BE_URL + '/items', formData);

        if(res.status === 200){
            setIsSaved(true);
            formData.delete('title');
            formData.delete('description');
            formData.delete('price');
            formData.delete('size');
            formData.delete('label');
            formData.delete('categories');
            formData.delete("instagramUrl");
            formData.delete("images");
            formData.delete("images");
            formData.delete("images");
            formData.delete("images");
        }
    } catch (err) { 
        return err
    }
};

return (
    <div className='add-item-page-wrap'>
        {!isSaved ? <form className='add-item'>
            <div className='add-item-galery'>
                <ImageUpload inputName={'input1'} setImage={setImage1} image={image1}/>
                <ImageUpload inputName={'input2'} setImage={setImage2} image={image2}/>
                <ImageUpload inputName={'input3'} setImage={setImage3} image={image3}/>
                <ImageUpload inputName={'input4'} setImage={setImage4} image={image4}/>
            </div>
            {image1 === null && image2 === null && image3 === null && image4 === null ? <span style={{color: 'red', fontSize: 16}}>Загрузите хотя бы одно изображение</span> : null}
            <div className='add-item-info'>
                <div className='add-item-input'>
                    <label>Название: </label>
                    <input placeholder='...' value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
                    {title.length < 5 ? <span style={{color: 'red', fontSize: 16}}>Название должно быть больше 4 символов</span> : null}
                </div>
                <div className='add-item-input'>
                    <label>Цена:</label>
                    <input type='number'  placeholder='...' value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                    {isNaN(price) ? <span style={{color: 'red', fontSize: 16}}>Цена должна быть положительным числом</span> : null}
                </div>
                <div className='add-item-input'>
                    <label>Размер:</label>
                    <select onChange={(event) => {setSize(event.target.value)}} defaultValue={'XS'}>
                        <option value="XS" >XS</option>
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
                    {description.length < 20 ? <span style={{color: 'red', fontSize: 16}}>Описание должно быть больше 20 символов</span> : null}
                </div>
                <div className='add-item-input'>
                    <label>Ссылка на истаграмм:</label>
                    <input placeholder='...' value={instagramUrl} onChange={(event) => {setInstagramUrl(event.target.value)}}></input>
                    {!instagramUrl.startsWith("https://") ? <span style={{color: 'red', fontSize: 16}}>Это не ссылка</span> : null}
                </div>
                <div className='add-item-input'>
                    <label>Метка:</label>
                    <select onChange={(event) => {setLabel(event.target.value)}} defaultValue={'NONE'}>
                        <option value="LEGIT" >Оригинал</option>
                        <option value="NONE" >без метки</option>
                    </select>
                </div>
                <div className='add-item-input'>
                    <label>Категория:</label>
                    <select onChange={(event) => {setCategories(event.target.value)}} defaultValue={'HOODIE'}>
                        <option value="SWEATER">Свитер</option>
                        <option value="HOODIE">Худи</option>
                        <option value="PANTS">Штаны</option>
                    </select>
                </div>
                <div className='add-item-controls'>
                    <button className='add-item-controls-save-button' 
                        disabled={!instagramUrl.startsWith("https://") || description.length < 20 || isNaN(price) || title.length < 5 || (image1 === null && image2 === null && image3 === null && image4 === null)} 
                        style={!instagramUrl.startsWith("https://") || description.length < 20 || isNaN(price) || title.length < 5 || (image1 === null && image2 === null && image3 === null && image4 === null) ? {cursor: 'no-drop'} : null} 
                        onClick={(event) => {addItem(event)}}>Отправить заявку</button>
                </div>
            </div>
        </form> : 
            <div className='add-item' style={{height: '600px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap: '30px'}}>
                <img src={checkmarkImage} alt="checkmark" width={300}></img>
                <p style={{color: '#3ee63e'}}>Ваш товар отправлен на расмотрение</p>
                <Link to={'/'} className='add-item-page-back-button'>На главную</Link>
            </div>
        }
    </div>
)
}

export default AddItemPage
