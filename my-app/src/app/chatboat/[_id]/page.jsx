'use client'
import React, { useContext, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { useEffect } from 'react'
import style from './page.module.css'
import Header from '@/components/navbar/header'
import History from '@/components/historychat/history'
import Searchbox from '../../../components/searchbox/page'
import { Chatvalue } from '@/app/context/Chatcontext'


const genAi = new GoogleGenerativeAI('AIzaSyBTwaam47K4Re9GxdEuRyLvDaQfsOEprsQ')
function Chatbotid() {
  const {chatval,setchatval} = useContext(Chatvalue)
  console.log(chatval);
    const model = genAi.getGenerativeModel({model:"gemini-pro"})
const [first, setfirst] = useState([])
const [add,addall]=useState([])
const [val,setval]=useState("")
const [num,setsum]=useState(0)
const [samples,setsamples]=useState('')


function sample(){
    if(num==0){
        setsamples(val)
    }
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBTwaam47K4Re9GxdEuRyLvDaQfsOEprsQ`,{
    method:'POST',
    body: JSON.stringify({contents: [{parts: [ {text:val+" "+samples,},],},],}),
    headers:{'Content-Type': 'application/json'},
}).then(async(Res)=>{
    setsum(1)
  let a = await Res.json()
  console.log(a);
  setfirst(a.candidates)
  try{
    fetch('/api/chatdata',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({text:a.candidates[0].content.parts[0].text})
    })
  }catch(e){
    throw new  Error(e)
  }
  console.log(a.candidates[0].content.parts[0].text);
add.push(a.candidates[0].content.parts[0].text)   

})

    }

  return (
<div className={style.main}>
       <div className={style.one}>
         <Header></Header>
        </div>
       <div className={style.two}> 
         <History></History>
         <Searchbox></Searchbox>
        </div>
    </div>
  )
}

export default Chatbotid