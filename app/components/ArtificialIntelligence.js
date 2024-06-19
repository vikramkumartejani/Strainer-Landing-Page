import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArtificialIntelligence = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-24 md:px-20 px-5">
    <div className="text-right flex justify-end items-end">
      <h2 className="text-black text-[30px] sm:text-[40px] sm:leading-[48px] leading-[42px] font-gilroy-regular w-full max-w-[1055px] ">Experience genuine <span className="font-gilroy-bold text-blue"> artificial intelligence </span>
      with a team of specialized recruitment agents<span className="text-[#F4CD59]">.</span></h2>
    </div>
    <div>
      <div className="w-full flex xl:flex-row flex-col items-center gap-4 mt-10">
        <Image src='/assets/pc.svg' alt="Pc" width={300} height={384.44} loading="lazy" className="max-w-[736px] w-full" />
        <div className="flex flex-col items-end gap-8">
          <p className="text-black sm:text-[28px] text-xl font-gilroy-regular sm:leading-[33.6px] text-right xl:max-w-[521px] w-full">Your personal assistant, designed to offer task support, immediate assistance and expert advice, turning every interaction into an informative and helpful experience</p>
          <Link href='https://appv2.thestrainer.co/login' target='_blank' className='border-[3px] border-blue text-blue w-[197px] h-[59px] rounded-[10px] font-gilroy-bold text-xl flex items-center justify-center'>Start for Free</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArtificialIntelligence