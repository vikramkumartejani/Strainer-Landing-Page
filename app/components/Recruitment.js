import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Recruitment = () => {
  const recruitment = [
    {
      img: '/assets/ai-cv-parsing.svg',
      title: 'AI CV Parsing',
      desp: 'Save your candidates just by uploading their CV and manage your database with our AI assistant',
      width: 126.22,
      height: 87.19,
    },
    {
      img: '/assets/smart-cv-filter.svg',
      title: 'Smart CV Filter',
      desp: 'Automatically discard unqualified candidates and generate a ranking of the best',
      width: 100.72,
      height: 78.31,
    },
    {
      img: '/assets/reports.svg',
      title: 'Reports',
      desp: 'Generate reports of your candidates and processes to easily share with your clients',
      width: 115.92,
      height: 106.55,
    },
    {
      img: '/assets/automated-communication.svg',
      title: 'Automated Communication',
      desp: 'Contact your candidates and clients automatically via email and Whatsapp',
      width: 78.21,
      height: 82.47,
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto py-24 md:px-20 px-5">
      <h2 className="text-center font-gilroy-regular  text-[30px] sm:text-[40px] sm:leading-[48px] leading-[42px] text-black">
        Take your <span className="font-gilroy-bold text-blue">recruitment</span> to the next level with the power of artificial intelligence
        <span className="text-[#F4CD59]">.</span>
      </h2>

      {/* Box */}
      <div className='mt-[89px] mb-[105px] grid grid-cols-1 sm:grid-cols-2 lg:items-baseline justify-items-center gap-24'>
        {recruitment.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center justify-center max-w-[532px]">
            <Image src={item.img} alt={item.title} width={item.width} height={item.height} className="mb-[45.45px]" />
            <h3 className="font-gilroy-bold sm:text-[28px] text-[25px] leading-[34.66px] text-blue">{item.title}</h3>
            <p className="font-gilroy-regular sm:text-[28px] text-[24px] leading-[33.6px] text-black pt-5">{item.desp}</p>
          </div>
        ))}
      </div>

      {/* Check out other features */}
      <div className='flex items-center justify-center w-full'>
        <Link href='/' className='bg-blue rounded-[15px] w-[377px] h-[77px] text-white flex items-center justify-center text-[20px] leading-[24.96px] font-gilroy-bold'>Check out other features</Link>
      </div>
    </div>
  );
};

export default Recruitment;
