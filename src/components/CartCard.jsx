import React, { useEffect, useState ,useContext} from 'react'
import { datacontext } from '../Context/dataContext';
export const CartCard = ({func,props}) => {
    const [quantity,setQuantity]=useState(props.currentquantity);
    const  {cart,setCart} = useContext(datacontext);

    const handleDelete=()=>{
        const filterArray= cart.filter(el=>el.id != props.id)
        setCart([...filterArray])
        func(-((props.price)*(props.currentquantity)))
    }
  return (
    <>

    <div className='cart-card'>
        <div>
            <img src={props.imageURL} alt="" />
        </div>
        <div> 
            <div>{props.name}</div>
            <div>Rs{props.price}</div>
        </div>
       <div>
       <button disabled={quantity===1} onClick={()=>{
         const obj = cart.findIndex((el => el.id == props.id));
         cart[obj].currentquantity =quantity-1 ;
          setQuantity(quantity-1);
          func(-(props.price))
       }}>-</button>
       <span>
        {quantity}
        </span>
        <button disabled={quantity===props.quantity} onClick={()=>{
        const obj = cart.findIndex((el => el.id == props.id));
        cart[obj].currentquantity =quantity+1 ;
        setQuantity(quantity+1);
        func(props.price)
        }}>+</button>
       </div>
        <div onClick={handleDelete} >Remove</div>
    </div>
    </>
  )
}
//  
// onClick={()=>{setQuantity(quantity-1); }}
//     setQuantity(quantity-1);
//  }}