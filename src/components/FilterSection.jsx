import React, { useContext, useEffect } from 'react'
import { datacontext } from '../Context/dataContext';
import { useState } from 'react';

export const FilterSection = () => {
    const {initialdata,setData}=useContext(datacontext);
    const [use,setUse]=useState(0);
    const [color,setColor]=useState("");
    const [gender,setGender]= useState("");
    const [price,setPrice]=useState("");
    const [type,setType]=useState("");

    const handleFilter =()=>{
        setColor("");
        setGender("");
        setPrice("");
        setType("");
       setUse(use+1);
    }
    const filterArr= ()=>{
      if(color != ""){
        const arr = initialdata.filter((el)=>{
           return el.color== color
        })
        if(type !=""){
         return   arr.filter((el)=>{
           return el.type== type
         })
        }
        if(gender !=""){
            return arr.filter((el)=>{
               return el.gender== gender
        })
       }
       if(price!=""){
           if(price=="low"){
               return arr.filter((el)=>{
                   return Number(el.price)<=250
               })
           }
           else if(price=="mid"){
               return arr.filter((el)=>{
                   return Number(el.price)>250 && Number(el.price)<=450
               })
           }
           else if(price=="high"){
               return arr.filter((el)=>{
                   return Number(el.price)>450
               })
           }
       }
       return arr
      }else {
        if(gender != ""){
      const arr=initialdata.filter((el)=>{
       return el.gender== gender
           })
           if(type !=""){
               return  arr.filter((el)=>{
                 return el.type== type
               })
              }
              if(price!=""){
               if(price=="low"){
                   return arr.filter((el)=>{
                       return Number(el.price)<=250
                   })
               }
               else if(price=="mid"){
                   return arr.filter((el)=>{
                       return Number(el.price)>250 && Number(el.price)<=450
                   })
               }
               else if(price=="high"){
                   return arr.filter((el)=>{
                       return Number(el.price)>450
                   })
               }
           } 
           return arr;
      }else {
        if(type != ""){
           const arr=initialdata.filter((el)=>{
               return el.type== type})
               if(price!=""){
                   if(price=="low"){
                       return arr.filter((el)=>{
                           return Number(el.price)<=250
                       })
                   }
                   else if(price=="mid"){
                       return arr.filter((el)=>{
                           return Number(el.price)>250 && Number(el.price)<=450
                       })
                   }
                   else if(price=="high"){
                       return arr.filter((el)=>{
                           return Number(el.price)>450
                       })
                   }
               }
               return arr;
      }else{
      if(price!=""){
       if(price=="low"){
           return initialdata.filter((el)=>{
               return Number(el.price)<=250
           })
       }
       else if(price=="mid"){
           return initialdata.filter((el)=>{
               return Number(el.price)>250 && Number(el.price)<=450
           })
       }
       else if(price=="high"){
           return initialdata.filter((el)=>{
               return Number(el.price)>450
           })
       }
      }
      }
   }
}
if(color==""&& gender==""&& type==""&&price==""){
   return initialdata;
}
   }
   useEffect(()=>{
    const array=filterArr();
    setData([...array]);
   },[use])
  return (
    <div className='product-filter-section'>
        <div >
            <div onClick={handleFilter} style={{fontWeight:'bold',cursor:'pointer'}}>Clear filter</div>
            <div>Color</div>
            <input type="checkbox" value={color} checked={color==="Red"} onChange={()=> { 
              setColor("Red");
              setUse(use+1);
               }} /> <label htmlFor="">Red</label><br/>
            <input type="checkbox"  value={color} checked={color==="Blue"} onChange={()=>{setColor("Blue"); setUse(use+1); }} /> <label htmlFor="">Blue</label><br/>
            <input type="checkbox"  value={color} checked={color==="Green"} onChange={()=>{setColor("Green"); setUse(use+1); }} /> <label htmlFor="">Green</label><br/>
        </div>
        <div>
        <div>Gender</div>
            <input type="checkbox" value={gender} checked={gender==="Men"} onChange={()=>{setGender("Men");  setUse(use+1); }} /> <label htmlFor="">Men</label><br/>
            <input type="checkbox" value={gender} checked={gender==="Women"} onChange={()=>{setGender("Women"); setUse(use+1); }} /> <label htmlFor="">Women</label><br/>
           
        </div>
           <div>
           <div>Price</div>
            <input type="checkbox" value={price} checked={price==="low"} onChange={()=>{setPrice("low"); setUse(use+1); }} /> <label htmlFor=""> 0 to Rs250 </label><br/>
            <input type="checkbox" value={price} checked={price==="mid"} onChange={()=>{setPrice("mid"); setUse(use+1); }} /> <label htmlFor="">Rs251 to Rs450</label><br/>
            <input type="checkbox" value={price} checked={price==="high"} onChange={()=>{setPrice("high"); setUse(use+1); }} /> <label htmlFor="">Rs450</label><br/>
           </div>
           <div>
           <div>Type</div>
            <input type="checkbox" value={type} checked={type==="Polo"} onChange={()=>{setType("Polo"); setUse(use+1); }} /> <label htmlFor="">Polo</label><br/>
            <input type="checkbox" value={type} checked={type==="Hoodie"} onChange={()=>{setType("Hoodie"); setUse(use+1); }} /> <label htmlFor="">Hoddie</label><br/>
            <input type="checkbox" value={type} checked={type==="Basic"} onChange={()=>{setType("Basic"); setUse(use+1); }} /> <label htmlFor="">Basic</label>
           </div>
    </div>
   
  )
}
 
