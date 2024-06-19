import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            {/* Recruitment made easy */}
            <div className='w-full bg-blue relative pt-[30px] pb-[29.36px]'>
                    <Image src='/assets/Logo-site.svg' alt='Logo' width={133} height={150.64} className='absolute left-0' />
                <div className='w-full max-w-[1440px] mx-auto'>
                    <div className='flex lg:flex-row flex-col gap-14 items-center lg:justify-between w-full max-w-[1100px] mx-auto pt-48 md:pt-0 px-5'>
                        <div className='flex flex-col gap-[34px]'>
                            <h2 className='text-white sm:text-[40px] text-[34px] leading-[49.53px] font-neue-machina'>THESTRAINER.CO</h2>
                            <h3 className='text-white sm:text-[40px] text-[34px] leading-[49.53px] font-gilroy-bold pb-[13.64px]'>Recruitment made easy<span className='text-[#F4CD59]'>.</span></h3>
                        </div>
                        <button className='w-[197px] h-[59px] rounded-[15px] border-[3px] border-white font-gilroy-bold text-xl text-white'>Start for Free</button>
                    </div>
                </div>
            </div>

            {/* Footer Menu */}
            <div className='w-full bg-white'>
                <div className='w-full max-w-[1440px] mx-auto flex sm:flex-nowrap flex-wrap justify-left sm:gap-5 gap-12 sm:px-20 px-5 pt-[53px] pb-[35px]'>
                    {/* Products Links */}
                    <ul className='flex flex-col items-left gap-3 max-w-[197px] w-full'>
                        <h3 className='font-gilroy-bold text-[15px] leading-[18.57px] pb-3 text-black'>Products</h3>
                        <li><Link href='/meet-hira' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>Meet HIRA</Link></li>
                        <li><Link href='/aitools' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>AI Tools</Link></li>
                        <li><Link href='/features' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>Features</Link></li>
                        <li><Link href='/marketplace' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>TS Marketplace</Link></li>
                        <li><Link href='/cases' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>Cases</Link></li>
                    </ul>

                    {/* Pricing Links */}
                    <ul className='flex flex-col items-left gap-3 max-w-[197px] w-full'>
                        <h3 className='font-gilroy-bold text-[15px] leading-[18.57px] pb-3 text-black'>Pricing</h3>
                        <li><Link href='/pricing' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>Plans</Link></li>
                    </ul>

                    {/* Resources Links */}
                    <ul className='flex flex-col items-left gap-3 max-w-[197px] w-full'>
                        <h3 className='font-gilroy-bold text-[15px] leading-[18.57px] pb-3 text-black'>Resources</h3>
                        <li><Link href='/plans' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>Blog</Link></li>
                        <li><Link href='/plans' className='text-dark_gray text-[15px] leading-[18px] font-gilroy-regular'>FaQ</Link></li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className='w-full bg-blue h-[72px]'>
                <div className='w-full max-w-[1440px] mx-auto flex items-center justify-left h-full sm:pl-20 pl-5 '>
                    <p className='font-gilroy-regular leading-[18px] text-[15px] text-white text-shadow-custom'
                    >©The Strainer, all rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer