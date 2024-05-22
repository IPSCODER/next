"use client"

import React, { useState } from 'react'

const LoginForm = () => {
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const submitHandler = () =>{
    }

  return (
    <>
<form className='border p-6 rounded-lg shadow-md' >
        <h1 className='text-2xl font-bold uppercase' >Login</h1>
        <br/>
        <label>Email:</label>
        <br/>
        <input type='email' className='border p-2 w-80 rounded-sm' />
        <br/>
        <br/>
        <label>Password:</label>
        <br/>
        <input type='password' className='border p-2 w-80 rounded-sm' />
        <br/>
        <br/>
        <button className='w-50 h-10 border flex items-center justify-center px-8 rounded-sm bg-[#111] text-white' >Submit</button>
      </form>
    </>
  )
}

export default LoginForm