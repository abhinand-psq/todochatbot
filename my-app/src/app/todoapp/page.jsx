'use client'
import React, { useState } from 'react'

function Page() {
const [add, setadd] = useState('')
const [list,setlist]=useState(['sdsfd'])

function running(){
setlist(Val=>([...Val,add]))
}

    return (
    <div>
        <input type="text" name="" id="" onChange={(e)=>{setadd(e.target.value)}}/>
        <button onClick={()=>{running()}}>add</button>
        {
            list&&list.map((res,ind)=>{
                return(
                    <p key={ind}>{res}</p>
                )
            })
        }
    </div>
  )
}

export default Page