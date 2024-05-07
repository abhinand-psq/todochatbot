'use client'
import History from '@/components/historychat/history'
import Header from '@/components/navbar/header'
import React from 'react'
import style from './page.module.css'
import { useRouter } from 'next/navigation'
function Page() {
    let router = useRouter()
  return (
    <div className={style.main}>
       <div className={style.one}>
         <Header></Header>
        </div>
       <div className={style.two}> 
         <History></History>
         <input type="text" />
         <button onClick={()=>{router.push(`/chatboat/${3}`)}}>click</button>
        </div>
    </div>
  )
}

export default Page