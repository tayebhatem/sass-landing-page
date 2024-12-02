import clsx from 'clsx'
import  { useEffect, useState } from 'react'
import {Link as LinkScroll} from 'react-scroll'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScroll, setisScroll] = useState(false)
    const NavLink=({title}:{title:string})=>(
        <LinkScroll onClick={()=>setIsOpen(false)} to={title} spy smooth activeClass='nav-active' className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
            {title}
        </LinkScroll>
    )
    useEffect(() => {
      const handlScroll=()=>{
         setisScroll(window.scrollY>32)
      }
    window.addEventListener('scroll',handlScroll)
      return () => {
       window.removeEventListener('scroll',handlScroll)
      }
    }, [])
    
  return (
   <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4',isScroll && 'py-2 bg-black-100 backdrop-blur-[4px]')}>
    <div className='container flex h-14 items-center max-lg:px-5'>
        <a className='lg:hidden flex-1 cursor-pointer z-2'>
            <img src='/images/xora.svg' width={115} height={55} alt='logo'/>
        </a>
       <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 transition-all duration-300',isOpen?'max-lg:opacity-100':'max-lg:pointer-events-none')}>
        <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
             <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                <ul className='flex max-lg:block max-lg:px-12'>
                   <li className='nav-li'>
                    <NavLink title='features'/>
                    <div className='dot'/>
                    <NavLink title='pricing'/>
                   </li>

                   <li className='nav-logo'>
                   <LinkScroll to='hero' offset={-250} spy smooth className='max-lg:hidden transition-transform duration-500 cursor-pointer'>
                   <img src='/images/xora.svg' width={160} height={55} alt='logo'/>
                   </LinkScroll>
                   </li>

                   <li className='nav-li'>
                    <NavLink title='faq'/>
                    <div className='dot'/>
                    <NavLink title='download'/>
                   </li>
                </ul>
             </nav>
        </div>
       </div>
       <button 
       onClick={()=>setIsOpen(!isOpen)}
       className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'>
         <img src={`/images/${isOpen ?'close':'magic'}.svg`} alt='magic' className='size-1/2 object-contain'/>
       </button>
    </div>
   </header>
  )
}

export default Header
