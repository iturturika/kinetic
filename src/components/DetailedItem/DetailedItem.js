import React from 'react'
import './DetailedItem.scss'
import closeIcon from '../../assets/img/closeIcon.svg'
import itemImg1 from '../../assets/img/itemImg1.jpg'

const DetailedItem = ({setOnClickItem}) => {
  return (
    <div className='overlay'>
      <img src={closeIcon} alt="X" className='close-icon' onClick={() => {setOnClickItem(false)}}></img>
      <div className='detailed-item-block'>
        <div className='detailed-item-galery'>
          <img src={itemImg1} alt='item' className='detailed-image' draggable="false"></img>
          <div className='detailed-item-galery-photo'> 
            <img src={itemImg1} alt='item' className='detailed-image-miniature' draggable="false"></img>
            <img src={itemImg1} alt='item' className='detailed-image-miniature' draggable="false"></img>
            <img src={itemImg1} alt='item' className='detailed-image-miniature' draggable="false"></img>
            <img src={itemImg1} alt='item' className='detailed-image-miniature' draggable="false"></img>
          </div>
        </div>
        <div className='detailed-info-block'>
            <h3 className='detailed-item-header'>T-SHIRT IMPRINT GREEN 2.0</h3>
            <p className='detailed-item-price'>12 000MDL</p>
            <label style={{marginTop: "20px", marginBottom: "10px"}}>Size</label>
            <select id="size" name="size">
                <option value="apple">S</option>
                <option value="banana">M</option>
                <option value="cherry">L</option>
                <option value="grape">XL</option>
            </select>
            <button className='buy-button'>BUY</button>
            <h4 style={{fontWeight: 700}}>Description:</h4>
            <p className='detailed-item-description'>
                Крой: оверсайз<br/>
                Материал: 50% хлопок, 50% акрил <br/>
                Детали: жаккардовая бирка, принт продолжается на задней части свитера <br />
                Упаковка: многоразовый матовый зип-лок для хранения вещи <br />

                Срок отправления предзаказов от 2 до 4 недель <br />

                Рекомендации по уходу: <br />
                Стирка при 30° на бережном режиме наизнанку <br />

                Размеры изделия в конце карусели, рекомендации: <br />
                S/M до 175-180 см, L/XL до 200 см <br />

                Размер на Парадеиче и Жожо L/XL, рост 185 и 187 см  <br />
                Размер на Наташе и Арине S/M, рост 163 см <br />
                LxWxH: 350x450x100 mm <br />

                Weight: 1000 g <br />
            </p>
        </div>
      </div>
    </div>
  )
}

export default DetailedItem
