import React from 'react'
import './Search.scss'
import searchImg from '../../assets/img/searchImg.svg';
// import crossImg from '../../assets/img/cross.svg';

const Search = ({setTitle, titleInput, setTitleInput}) => {

  return (
    <div className='search'>
        <input placeholder='Поиск:' value={titleInput} onChange={(event) => {setTitleInput(event.target.value)}}></input>
        <span className='search-img' onClick={() => {setTitle(titleInput)}}><img src={searchImg} alt='search' /></span>
    </div>
  )
}

export default Search
