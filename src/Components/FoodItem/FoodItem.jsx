import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets.js'

const FoodItem = ({id,name,image,price,description}) => {

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
         <img className='food-item-image' src={image}/>

        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img scr={assets.rating_starts} alt='images' />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>

        </div>
      
    </div>
  )
}

export default FoodItem
