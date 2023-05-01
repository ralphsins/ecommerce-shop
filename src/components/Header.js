import React, { useContext, useEffect,useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
const Header = () => {

  const { setIsOpen, isOpen } = useContext(SidebarContext);

  const { itemsAmount } = useContext(CartContext);

  const [isActive, setisActive] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    })

  }, [])
  return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>

    <div className='flex container mx-auto items-center justify-between h-full'>
      <Link to={'/'}>
        <div>
          <img className=" w-[40px]"
            src={Logo} />
        </div>
      </Link>
      <div
        className='cursor-pointer flex relative '
        onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl ' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white 
      rounded-full flex justify-center items-center'>
          {itemsAmount}
        </div>

      </div>
    </div>
  </header>
};

export default Header;
