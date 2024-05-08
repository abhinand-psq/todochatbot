'use client'
import { createContext,useState } from "react";

export const Chatvalue = createContext(null)

export const Chatfun = ({children})=>{
const [chatval, setchatval] = useState('');
return(
    
<Chatvalue.Provider value={{chatval,setchatval}}>
 {children}
</Chatvalue.Provider>
)
}