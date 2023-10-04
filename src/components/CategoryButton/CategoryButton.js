import React from 'react'
import './CategoryButton.scss'

const CategoryButton = ({nameCategory, value, setCategories, style}) => {
  return (
    <div className='category-button' onClick={() => {setCategories(value)}} style={style}>
        <p>{nameCategory}</p>
    </div>
  )
}

export default CategoryButton
