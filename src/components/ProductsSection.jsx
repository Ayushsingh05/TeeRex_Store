import React from 'react'
import { AllProductsSection } from './AllProductsSection'
import { FilterSection } from './FilterSection'
import { useEffect ,useContext } from 'react';
import { useState } from 'react'
import { datacontext } from '../Context/dataContext';
export const ProductsSection = () => {
    const {setInitial,setData} =useContext(datacontext);
    const fetchData= async ()=>{
    const url='https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
    try{
        const res= await fetch(url);
    const data= await res.json();
    setData(data);
    setInitial(data)
    }catch(e){
 console.log(e);
    }  
 }
    useEffect(()=>{
     fetchData();
    },[])
  return (
    <div className='product-section'>
        <FilterSection />
        <AllProductsSection />
    </div>
  )
}
