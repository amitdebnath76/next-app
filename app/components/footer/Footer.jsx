import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-20 bg-slate-300 py-12'>
        <div>@2024. Next APP. All rights reserved</div>
        <div className='flex justify-around gap-7'>
            <Image src='/1.png' alt='' height={20} width={20}></Image>
            <Image src='/2.png' alt='' height={20} width={20}></Image>
            <Image src='/3.png' alt='' height={20} width={20}></Image>
            <Image src='/4.png' alt='' height={20} width={20}></Image>
        </div>
    </div>
  )
}

export default Footer