import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hira = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto text-left md:px-20 px-5'>
        <h2 className='font-gilroy-regular sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] max-w-[1063px] text-black'>Meet <span className='text-blue font-gilroy-bold'>HIRA</span>, your new hiring assistant and get the most out of your talent pool<span className='text-[#F4CD59]'>.</span></h2>
        <div className='w-full my-[11px] flex lg:flex-row flex-col-reverse justify-between lg:items-center gap-10'>
            <div className='lg:max-w-[521px]'>
                <p className='text-[28px] leading-[33.6px] font-gilroy-regular pb-10'>Optimize your recruitment strategy and maximize the potential of each candidate. Discover business opportunities and boost your talent selection, taking your business to new heights</p>
                <Link href='https://appv2.thestrainer.co/login' target='_blank' className='border-[3px] border-blue text-blue w-[197px] h-[59px] rounded-[10px] font-gilroy-bold text-xl flex items-center justify-center'>Start for Free</Link>
            </div>
            <div className='max-w-[630px] mx-auto lg:min-h-[472px] flex justify-center my-5'>
                <video className="w-full lg:h-[472px]" autoPlay muted loop>
                    <source src="/assets/hire-video.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Hira