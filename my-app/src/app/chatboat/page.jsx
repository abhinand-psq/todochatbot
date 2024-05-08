'use client'
import History from '@/components/historychat/history'
import Header from '@/components/navbar/header'
import Searchbox from '../../components/searchbox/page'
import React from 'react'
import style from './page.module.css'

function Page() {

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

export default Page