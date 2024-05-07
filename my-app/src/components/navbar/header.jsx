'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
  const route = useRouter()
  return (
    <div>
        <button onClick={()=>{route.push('/chatboat')}}>+</button>
    </div>
  )
}

export default Header