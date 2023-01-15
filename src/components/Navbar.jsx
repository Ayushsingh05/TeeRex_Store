import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 
import { datacontext } from '../Context/dataContext'
export const Navbar = () => {
  const {cart}= useContext(datacontext);
  return (
    <div className='store-navbar'>
        <div>TeeRex Store</div>

         <div style={{display:'flex',alignItems:'center'}}>
         <Link to={'/'} style={{textDecoration:'none',color:'black'}}><div style={{marginRight:'20px',position:'relative'}}>Products</div></Link> 
            <span style={{width:'40px',height:'0.8px',backgroundColor:'black',position:'absolute',top:'35px'}}></span>
          <Link to={'/cart'} style={{textDecoration:'none',color:'black',position:'relative'}}> <FontAwesomeIcon  icon={faCartShopping}/>
          <div className='cart-count'>{cart.length}</div>
          </Link> 
         </div>
    </div>
  )
}
// style={{position:'relative'}}
