'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navLink = [
        {id:1,title:'Home',url:'/'},
        {id:2,title:'About',url:'/about'},
        {id:3,title:'Portfolio',url:'/portfolio'},
        {id:4,title:'Blog',url:'/blog'},
        {id:5,title:'Contact',url:'/contact'},
        {id:6,title:'Dashboard',url:'/dashboard'},
    ]
  return (
    <div className='flex justify-between container px-28 mt-16 '>
        <div className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-transparent bg-clip-text'><p>Next APP</p></div>
        <div className='flex justify-center gap-6'>
        {
            navLink.map((link,id)=> <Link className= 'text-xl font-semibold text-green-400 hover:text-green-800' key={link.id} href={link.url}>{link.title}</Link>)
        }
        </div>
        <div><button className='bg-cyan-500 hover:bg-cyan-600 text-white font-blod text-xl px-3 py-2  rounded-md border-blue-700' onClick={()=>console.log('Log Out')}>Log Out</button></div>
    </div>
  )
}

export default Navbar