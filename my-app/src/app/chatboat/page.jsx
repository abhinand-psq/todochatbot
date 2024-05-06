'use client'
import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { useEffect } from 'react'
import style from './page.module.css'
const genAi = new GoogleGenerativeAI('AIzaSyBTwaam47K4Re9GxdEuRyLvDaQfsOEprsQ')
function Page() {
    const model = genAi.getGenerativeModel({model:"gemini-pro"})
const [first, setfirst] = useState([])
const [add,addall]=useState([])
const [val,setval]=useState("")
const [num,setsum]=useState(0)
const [samples,setsamples]=useState('')
useEffect(() => {
 
},[])

function sample(){
    if(num==0){
        setsamples(val)
    }
    
//         const prompt = "Write a story about a magic backpack."
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBTwaam47K4Re9GxdEuRyLvDaQfsOEprsQ`,{
    method:'POST',
    body: JSON.stringify({contents: [{parts: [ {text:val+" "+samples,},],},],}),
    headers:{'Content-Type': 'application/json'},
}).then(async(Res)=>{
    setsum(1)
  let a = await Res.json()
  console.log(a);
  setfirst(a.candidates)
  console.log(a.candidates[0].content.parts[0].text);
add.push(a.candidates[0].content.parts[0].text)   

})

    }

  return (
    <div className={style.main}>


<div className={style.two}>
{
    add&&add.map((res,ind)=>{
        return(
            <p key={ind}>{res}</p>
        )
    })
 }
</div>


<div className={style.one}>

 <div className={style.com}>
 <input type="text" onChange={(e)=>{setval(e.target.value)}} />      
 <button onClick={()=>{sample()}}>click</button>
 </div>
 {
   first && first.map((Res,inds)=>{
    
    return(
       <p key={inds}>{Res.content.parts[0].text}</p>
    )
    })
 }
</div>

    </div>
  )
}

export default Page