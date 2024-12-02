import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Marker from './Marker'

const Button = ({icon,href,markerFill,onClick,children}:{icon:string,href:string,markerFill:string,onClick:()=>void,children:ReactNode}) => {
    const Inner=()=>(
        <>
       <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
       <span className='absolute -left-[1px]'>
           <Marker fill={markerFill}/>
        </span>
        {
            icon && <img src={icon} alt='circle' className='size-10 mr-5 object-contain z-10'/>
        }
        <span className='relative z-2 font-poppins uppercase base-bold text-p1'>{children}</span>
        <span className='glow-before glow-after'/>
       </span>
        </>
      )
  return href?
 
  (
    <a href={href} className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')}>
      <Inner/>
    </a>
  )
  : (
    <button onClick={onClick} className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')}>
       <Inner/>
    </button>
  )
}

export default Button
