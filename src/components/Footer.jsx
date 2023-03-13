import React from 'react'
import {AiOutlineCopyright, AiOutlineMail, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

const date = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='mt-12 pb-4 bg-gradient-to-r from-purple-100/40 to-blue-100/40'>
      <div className='border-t-2 flex flex-col gap-2 pt-4 mx-2 items-center sm:items-start'>
        <p className='text-xs sm:text-sm text-black flex items-center gap-2'>

      <AiOutlineCopyright size={15}/> Harry's English Club {date}
        </p>
      <a href="mailto:hpayne13.test@gmail.com" className='cursor-pointer hover:scale-[102%] ease'><p className='text-xs sm:text-sm text-black flex items-center gap-2'><AiOutlineMail/>hpayne13.test@gmail.com</p></a>
      <p className='text-xs sm:text-sm text-black flex items-center gap-2'><CiLocationOn size={16}/> Yaotsu, Gifu, Japan</p>
      <div className='flex gap-4 ml-2'>
        <AiFillFacebook size={20} className='hover:scale-105 cursor-pointer'/>
        <AiFillTwitterSquare size={20} className='hover:scale-105 cursor-pointer'/>
        <AiFillInstagram size={20} className='hover:scale-105 cursor-pointer'/>
      </div>
      </div>
    </div>
  )
}

export default Footer