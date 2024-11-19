import React from 'react'
import {CiSearch} from 'react-icons/ci'
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'

const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/login"
    }
  ]
  return (
    <div className= 'flex items-center gap-7 h-20 p-5'> 
        <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>Movie</div>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input placeholder='Search' className='outline-none flex-1 bg-transparent' type="text" />
            <CiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
          menu.map((mn,i) =>(
            <MenuItem mn ={mn} key={i}/> 
          ))
        }
    </div>
  )
}

export default Header;