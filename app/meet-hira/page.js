import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IntuitiveInterface from './IntuitiveInterface'

const MeetHIRA = () => {
  return (
    <>
    <div className='w-full bg-bg-meet-hira'>
      <div className='w-full max-w-[1440px] mx-auto py-[200px] md:px-20 px-5'>
        <div className='flex lg:flex-row flex-col items-start justify-between gap-[29px]'>
          <div className='text-white'>
            <h2 className='sm:text-[64px] text-[45px] sm:leading-[79.23px] leading-[52px] font-gilroy-bold max-w-[630px]'>Meet <span className='text-[#F4CD59]'>HIRA</span>, your new hiring assistant<span className='text-[#F4CD59]'>.</span></h2>
            <p className='font-gilroy-regular text-[28px] leading-[34.66px] mt-4 max-w-[838px]'><span className='text-[#F4CD59] font-gilroy-bold'>Optimize</span> your recruitment strategy and <span className='text-[#F4CD59] font-gilroy-bold'>maximize</span> the potential of each candidate</p>
            <Link href='https://appv2.thestrainer.co/login' target='_blank' className='mt-10 border-[3px] border-white text-white w-[197px] h-[59px] rounded-[10px] font-gilroy-bold text-xl flex items-center justify-center'>Start for Free</Link>
          </div>
          <div className=''>
            <Image src='/assets/robot.svg' alt='robot' width={373} height={373} className='mt-[-30px]' />
          </div>
        </div>
      </div>
    </div>
    
    <div className='w-full'>
      {/* HIRA is The Strainer's AI-powered candidate management assistant */}
      <div className='w-full max-w-[1440px] mx-auto md:px-20 px-5'>
        <div className='w-full flex items-end justify-end pb-8'>
          <h2 className='text-black font-gilroy-regular sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] max-w-[1023px] text-right'><span className='text-blue font-gilroy-bold'>HIRA</span> is The Strainer's <span className='text-blue font-gilroy-bold'>AI-powered</span> candidate management assistant<span className='text-[#F4CD59]'>.</span></h2>
        </div>
        <div className='flex lg:flex-row flex-col justify-between gap-5 z-40'>
          <div className='flex items-center justify-center'>
            <Image src='/assets/hira-candi.svg' alt='Image' width={350} height={501} className='xl:-mt-[78px] lg:-mt-[30px]' />
          </div>
          <div className='flex flex-col gap-[135px] items-end'>
            <p className='text-[28px] leading-[33.6px] font-gilroy-regular lg:max-w-[628px] lg:text-right'>HIRA uses GPT technology to process natural language requests, making candidate management efficient and user-friendly.</p>
            <Link href='https://appv2.thestrainer.co/login' target='_blank' className='mt-10 border-[3px] border-white text-white w-[197px] h-[59px] rounded-[10px] font-gilroy-bold text-xl flex items-center justify-center z-40 relative'>Start for Free</Link>
          </div>
        </div>
      </div>

      {/* Add, update, and manage candidate profiles. */}
      <div className='w-full bgcustom'>
       <div className='max-w-[1440px] m-auto md:px-20 p-5 text-center'>
          <h2 className='lg:pt-10 pt-[12rem] font-gilroy-regular text-white sm:text-[40px] text-[30px] sm:leading-[49px] leading-[42px]'><span className='text-[#F4CD59] font-gilroy-bold'>Add, update, and manage</span> candidate profiles<span className='text-[#F4CD59]'>.</span></h2>
          <div className='mt-[117px] grid lg:grid-cols-2 grid-cols-1 xlg:gap-[148px] gap-[50px] text-left'>
            <div className='shadow-custom bg-white sm:px-[35px] px-[20px] py-[30px] rounded-[20px]'>
              <h2 className='mb-[29px] text-blue sm:text-[40px] text-[30px] sm:leading-[49px] leading-[42px] font-gilroy-bold'>Filter</h2>
              <p className='text-[24px] leading-[28.8px] font-gilroy-regular text-black'>Narrow down candidates based on specific criteria.</p>
            </div>
            <div className='shadow-custom bg-white sm:px-[35px] px-[20px] py-[30px] rounded-[20px]'>
              <h2 className='mb-[29px] text-blue sm:text-[40px] text-[30px] sm:leading-[49px] leading-[42px] font-gilroy-bold'>Search</h2>
              <p className='text-[24px] leading-[28.8px] font-gilroy-regular text-black'>Easily find candidates with desired qualifications.</p>
            </div>
            <div className='shadow-custom bg-white sm:px-[35px] px-[20px] py-[30px] rounded-[20px]'>
              <h2 className='mb-[29px] text-blue sm:text-[40px] text-[30px] sm:leading-[49px] leading-[42px] font-gilroy-bold'>Recommendations</h2>
              <p className='text-[24px] leading-[28.8px] font-gilroy-regular text-black'>Get help with job descriptions and competencies.</p>
            </div>
            <div className='shadow-custom bg-white sm:px-[35px] px-[20px] py-[30px] rounded-[20px]'>
              <h2 className='mb-[29px] text-blue sm:text-[40px] text-[30px] sm:leading-[49px] leading-[42px] font-gilroy-bold'>Data Extraction</h2>
              <p className='text-[24px] leading-[28.8px] font-gilroy-regular text-black'>Efficiently record and compare candidate information.</p>
            </div>
          </div>
       </div>
      </div>
      
    </div>

    {/* Intuitive Interface Section */}
    <IntuitiveInterface/>
    </>
  )
}

export default MeetHIRA