import { Container } from './index'
import React from 'react'
import { IoLogoGoogle } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { TbBrandWalmart } from "react-icons/tb";
import { SiRelianceindustrieslimited } from "react-icons/si";


const Trusted = () => {
    return (
        <Container>
            <div className='w-full flex flex-col justify-center items-center bg-green-50'>
                <p className='font-semibold text-center mb-3'>Trusted by 1000+ companies</p>
                <div className='flex flex-row space-x-4 justify-center p-2 flex-wrap lg:space-x-10 bg-gray-100 w-fit '>
                    <div className='flex flex-col items-center justify-center p-1'>
                        <IoLogoGoogle className='text-lg lg:text-3xl' />
                        <p>Google</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-1'>
                        <FaAmazon className='text-lg lg:text-3xl' />
                        <p>Amazon</p>
                    </div><div className='flex flex-col items-center justify-center p-1'>
                        <FaApple className='text-lg lg:text-3xl' />
                        <p>Apple</p>
                    </div><div className='flex flex-col items-center justify-center p-1'>
                        <SiFlipkart className='text-lg lg:text-3xl' />
                        <p>Flipkart</p>
                    </div><div className='flex flex-col items-center justify-center p-1'>
                        <TbBrandWalmart className='text-lg lg:text-3xl' />
                        <p>Walmart</p>
                    </div><div className='flex flex-col items-center justify-center p-1'>
                        <SiRelianceindustrieslimited className='text-lg lg:text-3xl' />
                        <p>Reliance</p>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Trusted