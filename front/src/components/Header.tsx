import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {  useEffect, useState } from 'react'
import ItemCart from './ItemCart/ItemCart'
import { useSelector } from 'react-redux'
import { RootState } from '@/Interface/IreducerState'

const navigation = [
    { id:1, title:'Головна', path: '/' },
    { id:2, title:'Магазин', path: '/shop' },
    { id:3, title:'Про нас', path: '/about' },
    { id:4, title:'Доставка', path: '/delivery' },
]

const Header = () => {
    const[ShowItemCart, setShowItemCart] = useState(false);
    const {pathname} = useRouter();
   
    const counter = useSelector((state:RootState) => state.basketChenge.count)
    useEffect(()=>{
        if(counter === 1){
            setShowItemCart(true)
            document.body.style.overflowY='hidden'
        }
    },[counter])

// Нажатие на корзину
    const changeTheStateOfTheCart = () =>{
        setShowItemCart(!ShowItemCart)
         document.body.style.overflowY='hidden'
    }
    
    
    return (
        
        <header className=' bg-hunter-green shadow-sm max-[400px]:sticky max-[400px]:top-0 max-[400px]:z-10 max-[400px]:h-[80px]'>
            <div className=' max-w-7xl  mx-auto text-white py-6 px-4 max-[400px]:py-2 flex items-center justify-between  '>
            <div className="hidden md:flex items-center">
                {/* Логотип */}
                <Link href={navigation[0].path}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-12 h-12 hover:scale-95">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>

                </Link>
                {/* Навигационное меню */}
                <nav className=' flex ml-10 space-x-4 font-bold'>
                    {navigation.map(({id, title, path}) => {
                        return (
                            <Link key={id} href={path} 
                            className={(pathname === path ? 'menu-item active' : 'menu-item hover:text-tea-green')}>
                                {title}
                            </Link>
                        )
                    })}
                </nav>

            </div>
            <button className='flex basis-1/3 md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </button>
            <Link className='flex basis-1/3 justify-center md:hidden' href={navigation[0].path}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-12 h-12 hover:scale-95">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
            </Link>
            {/* Блок с кнопками */}
            <div className="flex basis-1/3 justify-end items-center space-x-2">
                {/* Корзина */}
                <button className='flex justify-center items-center relative p-2' onClick={(e)=> changeTheStateOfTheCart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span className='flex justify-center items-center absolute bottom-0 left-0 rounded-full font-bold w-8 h-8  bg-yellow-500'>{counter}</span>
                </button>
                {/* Кабинет */}
                <button className='flex justify-center items-center relative p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                {/* <button className='p-2 px-8 bg-main-green rounded-xl font-bold'>Войти</button> */}
            </div>
                   
            </div>
            {ShowItemCart ? <ItemCart changeState={setShowItemCart} ShowItemCart={ShowItemCart} /> : null}    
        </header>

    )
}

export default Header;