import React from 'react'
import './DetailedItem.scss'
import closeIcon from '../../assets/img/closeIcon.svg'
import itemImg1 from '../../assets/img/itemImg1.jpg'

const DetailedItem = ({setOnClickItem}) => {
  return (
    <div className='overlay'>
      <img src={closeIcon} alt="X" className='close-icon' onClick={() => {setOnClickItem(false)}}></img>
      <div className='detailed-item-block'>
        <img src={itemImg1} alt='item' className='detailed-image'></img>
        <div className='detailed-info-block'>
            <h3 className='detailed-item-header'>Name item</h3>
            <p className='detailed-item-price'>12000MDL</p>
            <label>Size</label>
            <select id="size" name="size">
                <option value="apple">S</option>
                <option value="banana">M</option>
                <option value="cherry">L</option>
                <option value="grape">XL</option>
            </select>
            <button className='buy-button'>BUY</button>
            <h4>Description:</h4>
            <p className='detailed-item-description'>
                Крой: оверсайз
                Материал: 50% хлопок, 50% акрил 
                Детали: жаккардовая бирка, принт продолжается на задней части свитера 
                Упаковка: многоразовый матовый зип-лок для хранения вещи 

                Срок отправления предзаказов от 2 до 4 недель 

                Рекомендации по уходу: 
                Стирка при 30° на бережном режиме наизнанку 

                Размеры изделия в конце карусели, рекомендации: 
                S/M до 175-180 см, L/XL до 200 см 

                Размер на Парадеиче и Жожо L/XL, рост 185 и 187 см  
                Размер на Наташе и Арине S/M, рост 163 см 
                LxWxH: 350x450x100 mm 

                Weight: 1000 g 
            </p>
        </div>
      </div>
    </div>
  )
}

export default DetailedItem
