import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className=' bg-hunter-green shadow-sm'>
            <div className=' max-w-7xl mx-auto text-white py-6 px-4'>
                <h1>Home</h1>
                <Link href={'/delivery'}><h1>Delivery</h1></Link>

            </div>
            
        </div>
    )
}

export default Header