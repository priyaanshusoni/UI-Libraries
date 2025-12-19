'use client'

import React, { useEffect } from 'react'
import { useState  } from 'react'

const ToggleTheme = () => {

    const [theme , setTheme] = useState('dark')
 



    useEffect(()=> {

        const currentTheme  = localStorage.setItem('theme', theme);

        const html = document.documentElement;
        const currentClassName = html.classList.value;

        if(currentClassName === theme) return;
        html.classList.replace(currentClassName , theme)
        localStorage.setItem('theme', theme)

       

    },[theme])
  return (
    <div>


        <div className='flex   bg-background   gap-4 items-center text-foreground border rounded-xl p-2 w-fit mx-auto mt-4'>

            <span   onClick={()=> setTheme('light')} className='cursor-pointer'>Switch to Light Mode </span>

            <span>|</span>


        <span onClick={()=> setTheme('dark')} className='cursor-pointer'>Switch to Dark Mode</span>

        </div>


    </div>
  )
}

export default ToggleTheme