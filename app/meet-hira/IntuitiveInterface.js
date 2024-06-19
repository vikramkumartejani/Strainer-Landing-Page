import React from 'react'

const IntuitiveInterface = () => {
  return (
    <div className='w-full py-[80px] px-5 md:px-20'>
        <h2 className='font-gilroy-regular sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] max-w-[954px] mx-auto text-center'>HIRA's <span className='font-gilroy-bold text-blue'>intuitive interface</span> ensures quick adoption and seamless integration into your workflow<span className='text-[#F4CD59]'>.</span></h2>
        <div className='max-w-[1165px] mx-auto mt-[95px] bg-[#D7DEFF] shadow-custom rounded-[20px] py-24 flex md:flex-row flex-col gap-10 md:gap-0 items-center sm:px-[48px] px-5'>
            <h2 className='max-w-[364px] font-gilroy-regular sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px]'>To use <span className='text-blue font-gilroy-bold'>HIRA</span>, simply type your request in plain language. </h2>
            <div className=''>
                <div className='bg-white p-5 max-w-[394px] shadow-custom rounded-custom lg:ml-[207px] sm:ml-[50px]'>
                    <p className='font-gilroy-medium text-[16px] leading-[19.41px] '>Find someone that fits the profile for a journalist. I’m looking for corporate communications, it can be remote. Broaden the search if necessary.</p>
                </div>
                <div className='bg-blue text-white p-6 max-w-[394px] shadow-custom rounded-custom1 mt-[35px] sm:ml-[92px]'>
                    <p className='font-gilroy-medium text-[16px] leading-[19.41px] '>I found a couple of candidates who might fit the profile for a Corporate Communications Journalist. Here are the details:</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntuitiveInterface