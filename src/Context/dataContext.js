import { createContext } from "react";

import React from 'react'
import { useState } from "react";

export const datacontext= createContext();
 
 export const DataContext = ({children}) => {
    const [data,setData ] = useState([]);
    const [cart,setCart] = useState([]);
    const [initialdata,setInitial]=useState([]);
    const [hide,sethide]=useState(false);
   return (
     <datacontext.Provider value={{data,setData,cart,setCart,initialdata,setInitial,sethide,hide}}>
       {children}
     </datacontext.Provider>
   )
 }
 