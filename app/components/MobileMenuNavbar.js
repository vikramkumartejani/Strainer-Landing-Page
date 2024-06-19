'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa'

const MobileMenuNavbar = () => {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

    return (
        <>
            <div className='lg:hidden bg-white shadow-lg'>
                <ul className='flex flex-col items-center py-4 gap-5'>
                    <li className='text-blue w-full'>
                        <div onClick={() => setIsProductMenuOpen(!isProductMenuOpen)} className='flex items-center justify-between px-4 font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                            Product <FaChevronDown className={`ml-1 transition-transform ${isProductMenuOpen ? 'transform rotate-180' : ''}`} />
                        </div>
                        {isProductMenuOpen && (
                            <div className='w-full py-3'>
                                <ul className='pl-6 flex gap-3 flex-col'>
                                    <li>
                                        <Link href='/meet-hira' className='font-gilroy-bold font-normal text-[15px] leading-[18.57px]'>
                                            Meet HIRA
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/ai-tools' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            AI tools*
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/features' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/marketplace' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            TS Marketplace
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/cases' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            Cases
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className='font-gilroy-bold text-[15px] font-normal leading-[18.57px] text-blue text-left w-full pl-4'>
                        <Link href='/pricing'>Pricing</Link>
                    </li>
                    <li className='text-blue w-full'>
                        <div onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)} className='flex items-center justify-between w-full px-4 font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                            Resources <FaChevronDown className={`ml-1 transition-transform ${isResourcesMenuOpen ? 'transform rotate-180' : ''}`} />
                        </div>
                        {isResourcesMenuOpen && (
                            <div className='w-full py-2'>
                                <ul className='pl-6 flex gap-2 flex-col'>
                                    <li>
                                        <Link href='/faq' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/blog' className='font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className='text-blue font-gilroy-bold text-[15px] font-normal leading-[18.57px] cursor-pointer'>
                        <Link href='#'>Login</Link>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button className='bg-blue w-40 py-2 rounded-lg text-white font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                            Book a Demo
                        </button>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button className='border-2 border-blue w-40 py-2 rounded-lg text-blue font-gilroy-bold text-[15px] font-normal leading-[18.57px]'>
                            Start for Free
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenuNavbar;
