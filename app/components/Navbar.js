'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import MobileMenuNavbar from './MobileMenuNavbar'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

    const productMenuRef = useRef(null);
    const resourcesMenuRef = useRef(null);

    const toggleResourcesMenu = () => {
        setIsResourcesMenuOpen(!isResourcesMenuOpen);
    };

    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (productMenuRef.current && !productMenuRef.current.contains(event.target)) {
            setIsProductMenuOpen(false);
        }
        if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target)) {
            setIsResourcesMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='w-full bg-white border-b-[2px] border-blue fixed top-0 shadow-2xl z-50'>
            <div className='w-full max-w-[1442px] mx-auto flex items-center justify-between lg:px-5'>
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image src='/assets/Logo.svg' alt='Logo' width={240} height={70} className='cursor-pointer h-[70px]' />
                    </Link>
                    <div className='hidden lg:flex items-center'>
                        <ul className='flex items-center gap-[56px]'>
                            {/* Product Menu */}
                            <li className='relative group text-blue cursor-pointer' ref={productMenuRef}>
                                <button className='text-[15px] font-gilroy-bold leading-[18.57px]' onClick={toggleProductMenu}>
                                    Product
                                    <FaChevronDown className="inline ml-1 text-blue" />
                                </button>
                                {isProductMenuOpen && (
                                    <div className='absolute top-[50px] left-[-42px] bg-white w-[412px] rounded-lg shadow-lg'>
                                        <div className='grid grid-cols-2 gap-5'>
                                            <ul className='px-10 py-8 flex flex-col gap-14'>
                                                <li>
                                                    <Link href='/meet-hira' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        Meet HIRA
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link href='/ai-tools' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        AI tools*
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/features' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        Features
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className='px-10 py-8 flex flex-col gap-14'>
                                                <li>
                                                    <Link href='/marketplace' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        TS Marketplace
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/cases' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        Cases
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                            {/* Pricing */}
                            <li className='text-blue cursor-pointer text-[15px] font-gilroy-bold leading-[18.57px]'>
                                <Link href='/pricing'>Pricing</Link>
                            </li>
                            {/* Resources Menu */}
                            {/* <li className='relative text-blue flex items-center' ref={resourcesMenuRef}>
                                <button className='text-[15px] font-gilroy-bold leading-[18.57px]' onClick={toggleResourcesMenu}>
                                    Resources
                                    <FaChevronDown className="inline ml-1 text-blue" />
                                </button>
                                {isResourcesMenuOpen && (
                                    <div className='absolute top-[48px] left-[-42px] bg-white w-[277px] rounded-lg shadow-lg'>
                                        <div className='grid grid-cols-2 gap-5'>
                                            <ul className='px-10 py-8 flex flex-col gap-14'>
                                                <li>
                                                    <Link href='/faq' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/blog' className='text-[15px] font-gilroy-bold leading-[18.57px]'>
                                                        Blog
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex items-center gap-[14px]'>
                    <Link href='https://appv2.thestrainer.co/login' target='_blank' className='text-[#5271FF] text-[15px] leading-[18.57px] font-gilroy-bold font-normal'>
                        Login
                    </Link>
                    <Link href='https://calendly.com/alan-and-hira/demo-meeting' target='_blank' className='bg-[#5271FF] text-white min-w-[145px] h-[46px] rounded-[10px] font-gilroy-bold text-[15px] font-normal leading-[18.57px] flex items-center justify-center'>
                        Book a Demo
                    </Link>
                    <Link href='https://appv2.thestrainer.co/login' target='_blank' className='border-2 border-blue text-blue min-w-[145px] h-[46px] rounded-[10px] font-gilroy-bold text-[15px] font-normal leading-[18.57px] flex items-center justify-center'>
                        Start for Free
                    </Link>
                </div>
                <div className='lg:hidden mr-3'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes className="text-2xl text-[#5271FF]" /> : <FaBars className="text-2xl text-[#5271FF]" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <MobileMenuNavbar />
            )}
        </nav>
    )
}

export default Navbar
