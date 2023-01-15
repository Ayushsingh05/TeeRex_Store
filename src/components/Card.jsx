import React, { useContext, useState } from 'react'
import { datacontext } from '../Context/dataContext'

export const Card = ({props}) => {
  const [showQuantity, setShowQuantity]= useState(false);
  const  {cart,setCart} = useContext(datacontext);
  const [quantity,setQuantity]=useState(1);
  const handleAddCart =()=>{
    const obj={...props,currentquantity:quantity}
     setCart((arr)=>[...arr,obj]);
     setShowQuantity(true);
  }
  const handleSubQuantitty =()=>{
   const obj = cart.findIndex((el => el.id == props.id));
   cart[obj].currentquantity =quantity-1 ;
    setQuantity(quantity-1);
  }
  const handleAddQuantitty =()=>{
    const obj = cart.findIndex((el => el.id == props.id));
   cart[obj].currentquantity =quantity+1 ;
    setQuantity(quantity+1);
  }
  return (
    <div>
       <div>
       <img src={props.imageURL} alt={props.id}  />
       </div>
       <div>{props.name}</div>
       <div style={{display:'flex',justifyContent:'space-between',padding:'0px 10px'}}>
         <div style={{fontWeight:'bold'}}>Rs. {props.price}</div>
        {showQuantity? <>
         <button disabled={quantity===1} onClick={handleSubQuantitty}>-</button>
        <span >
          {quantity}
          </span>
          <button disabled={quantity===props.quantity}onClick={handleAddQuantitty}>+</button></>:
        <button onClick={handleAddCart}>Add to Cart</button>}
       </div>
    </div>
  )
}
