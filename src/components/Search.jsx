import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faFilter} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { datacontext } from './../Context/dataContext';
export const Search = () => {
  const[value,setValue] =useState("");
  const {initialdata,setData,sethide,hide}=useContext(datacontext);
  
  const search =()=>{
    const query= value.trim().toLowerCase();
  return initialdata.filter((el)=> el.name.trim().toLowerCase().includes(query)||el.type.trim().toLowerCase().includes(query)||el.color.trim().toLowerCase().includes(query))
  }
  return (
    <div className='store-search'>
        <input type="text" placeholder='Search for products..' value={value} onChange={(e)=>setValue(e.target.value)} />
        <div>
        <FontAwesomeIcon onClick={()=>{setData(search()); setValue("")  }} style={{color:'white'}} icon={faSearch}/>
        </div>
        <div className='filter-hide'>
        <FontAwesomeIcon style={{color:'white'}} onClick={()=>sethide(!hide)} icon={faFilter} />
        </div>
            
       
    </div>
  )
}
