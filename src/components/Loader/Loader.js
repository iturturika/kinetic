import React from 'react'
import './Loader.scss'

const Loader = ({isLoaded}) => {
  return (
        <div className="loader" style={isLoaded ? {display: 'block'} : {display: 'none'}}></div>
  )
}

export default Loader
