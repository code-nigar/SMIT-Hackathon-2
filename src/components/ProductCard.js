import React from 'react'
import './productCard.css'

export default function ProductCard(props) {
  return (
    <div className='product-card d-flex flex-row justify-content-around align-items-center border shadow-sm'>
        <img src={props.productImg} alt="product" />
        <h4>{props.productTitle}</h4>
        <p>{props.price} per {props.unit}</p>
    </div>
  )
}
