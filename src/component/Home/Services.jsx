import React from 'react'
import { Container } from "../index"
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";



const Services = () => {
    return (
        <Container>
            <div className='lg:flex lg:flex-row flex flex-col w-full justify-center lg:space-x-3 space-y-4 lg:space-y-0 '>
                <div className='flex flex-col justify-center items-center h-44 bg-green-100 space-y-3 p-2 rounded-md shadow-xl'>
                    <TbTruckDelivery />
                    <p>Super Fast and Free Delivery</p>
                </div>
                <div className='lg:flex lg:flex-col justify-center items-center space-y-4 '>
                    <div className='lg:flex lg:flex-row flex flex-col lg:w-64 lg:h-20 h-44 lg:space-x-2 justify-center items-center bg-green-100 p-2 rounded-md shadow-xl'>
                        <IoShieldCheckmarkSharp />
                        <p>Non-contact Shipping</p>
                    </div>
                    <div className='lg:flex lg:flex-row flex flex-col lg:w-64 lg:h-20 h-44 lg:space-x-2 justify-center items-center bg-green-100 p-2 rounded-md shadow-xl'> 
                         <GiMoneyStack />
                        <p>Money-back Guaranteed</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-44 bg-green-100 space-y-3 p-2 rounded-md shadow-xl'>
                    <RiSecurePaymentLine />
                    <p>Super Secure Payment System</p>
                </div>
            </div>
        </Container>
    )
}

export default Services