import React from 'react'
import './Loader.scss'

const Loader = ({isLoaded}) => {
  return (
        <div class="loader" style={isLoaded ? {display: 'block'} : {display: 'none'}}></div>
  )
}

export default Loader
