import React, { useContext, useState ,useEffect} from 'react'
import { CartCard } from '../components/CartCard';
import { EmptyCart } from '../components/Emptycart';
import { datacontext } from '../Context/dataContext'

export const Cart = () => {
    const {cart} = useContext(datacontext);
  const [price,setPrice]=useState(0);
  const managePrice= (amount)=>{
    setPrice(price+amount);
  }
  useEffect(()=>{
    let sum=0;
    if(cart.length>0){
      
      cart.map(el=>sum+=(el.price)*(el.currentquantity))
    }
      setPrice(sum)
  },[])
  return (
    <>
      <h1 className='cart-title'>Shopping Cart</h1>
      <div className='cart-container'>
        <div className='cart-item'>{
          cart.length > 0 ? cart.map(el =>
            <CartCard key={el.id} func={managePrice} props={el} />

          ) : null

        }</div>
        {
          cart.length>0 ?
          <div className='cart-total'>
          <div >Total Amount :</div>
          <div> ₹{price}</div>
        </div> : <EmptyCart/>
        }
        
      </div>
    </>
  )
}
