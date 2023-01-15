import React, { useContext } from 'react'
import { datacontext } from '../Context/dataContext';

import { Card } from './Card';

export const AllProductsSection = () => {
  const {data} =useContext(datacontext);
  // console.log(data);
  return (
    <div className='allProducts-section'>
        {
            data.length>0? data.map(el=> <Card key={el.id} props={el} />) :<h1> Sorry Data is not available </h1>
        }
    </div>
  )
}
