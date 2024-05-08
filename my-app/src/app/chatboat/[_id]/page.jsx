'use client'
import React, { useContext, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { useEffect } from 'react'
import style from './page.module.css'
import Header from '@/components/navbar/header'
import History from '@/components/historychat/history'
import Searchbox from '../../../components/searchbox/page'
import { Chatvalue } from '@/app/context/Chatcontext'
import { useParams } from 'next/navigation'



function Chatbotid() {
  const {chatval,setchatval} = useContext(Chatvalue)
 
  const {_id} = useParams()  
const [first, setfirst] = useState([])
const [add,addall]=useState([])
const [samples,setsamples]=useState('')

useEffect(() => {
  fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBTwaam47K4Re9GxdEuRyLvDaQfsOEprsQ`,{
    method:'POST',
    body: JSON.stringify({contents: [{parts: [ {text:chatval},],},],}),
    headers:{'Content-Type': 'application/json'},
}).then(async(Res)=>{
  let a = await Res.json()
  try{
    fetch('/api/chatdata',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({text:a.candidates[0].content.parts[0].text,question:chatval,pageid:_id})
    })
  }catch(e){
    throw new  Error(e)
  }
  setsamples(a.candidates[0].content.parts[0].text)
})

},[chatval,_id])




  return (
<div className={style.main}>
       <div className={style.one}>
         <Header></Header>
        </div>
       <div className={style.two}> 
         <History></History>
         {
          samples ? <p>{samples}</p> : null
         }
         <Searchbox></Searchbox>
        </div>
    </div>
  )
}

export default Chatbotid