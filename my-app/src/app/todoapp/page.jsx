'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
function Page() {
const [add, setadd] = useState('')
const [list,setlist]=useState([])
const [sample,setsample]=useState({name:"abhinand"})
const [myObject, setMyObject] = useState({ name: "John", age: 30 });
useEffect(() => {
    setsample((val)=>{
        return {...val,name:"adarsh",age:45}
       })
}, [])

function running(){
setlist(Val=>([...Val,add]))

}

async function sampleS(){
   console.log(sample);
}

    return (
    <div>
        <input type="text" name="" id="" onChange={(e)=>{setadd(e.target.value)}}/>
        <button onClick={()=>{running()}}>add</button>
        {
            list.length != 0&&list.map((res,ind)=>{
                return(
                    <div className={style.inp} key={ind}>
                        <p key={ind}>{res}</p>
                        <button>x</button>
                    </div>
                )
            })
              
        }
        
<button onClick={()=>{sampleS()}}>click</button>
    </div>

  )
}

export default Page