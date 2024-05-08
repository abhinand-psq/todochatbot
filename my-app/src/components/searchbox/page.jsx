import React, { useContext } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { Chatvalue } from '@/app/context/Chatcontext'
import { useState } from 'react'
function Searchbox() {
const {chatval,setchatval} = useContext(Chatvalue)
    let newcode =uuidv4()
    let router = useRouter()
    const {_id} =useParams()

    const [val, setval] = useState('')

    const handleSearch = () => {
        setchatval(val)
        router.push(`/chatboat/${newcode}`)
      }
  return (
    <div>
        <input type="text"  onChange={(e)=>{setval(e.target.value)}} />
         {
            _id ?<button>click changed</button>
            :
            <button onClick={()=>{handleSearch()}}>click</button>
         }
        
    </div>
  )
}

export default Searchbox