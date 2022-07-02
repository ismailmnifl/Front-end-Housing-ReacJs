import { useState } from 'react';
import { selectMenu, toggle } from 'src/app/features/menuSlice';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';

export default function NavBar() {
  const navbar = useAppSelector(selectMenu);
  console.log(navbar);
  
  const dispatch = useAppDispatch()

  return (
    <nav className='w-full  shadow'>
      <div className=' items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        
          <div className='flex items-center py-3 md:py-5 md:block'>
            <a href='#'>
              <h2 className='text-2xl font-bold text-black'>
                <img
                  className='h-[30px] w-auto'
                  src='http://localhost:3000/logo.png'
                  alt=''
                />
              </h2>
            </a>
            <div className='md:hidden ml-auto'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => dispatch(toggle())}>
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-black'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-black'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
       
        <div>
          <div
            className={`ml-10 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className='items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-black hover:text-indigo-200'>
                <a href='#'>About</a>
              </li>
              <li className='text-black hover:text-indigo-200'>
                <a href='#'>Projects</a>
              </li>
              <li className='text-black hover:text-indigo-200'>
                <a href='#'>Career</a>
              </li>
              <li className='text-black hover:text-indigo-200'>
                <a href='#'>Contact</a>
              </li>
            </ul>

            <div className='mt-3 space-y-2 lg:hidden md:inline-block'></div>
          </div>
        </div>
        <div className='hidden space-x-2 md:inline-block ml-auto'>
          <h2>EN</h2>
        </div>
      </div>
    </nav>
  );
}
