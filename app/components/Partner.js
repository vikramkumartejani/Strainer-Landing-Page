'use client'
import React from 'react';
import Image from 'next/image';
import TheyTrust from './TheyTrust';


const Partner = () => {
  return (
    <div className="w-full pt-20">
      <h2 className="text-center sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] font-gilroy-regular max-w-[836px] mx-auto px-5">
        Become a <span className="text-blue leading-[49.52px] font-gilroy-bold">partner</span> and be part of an international community of recruiters<span className="text-[#F4CD59]">.</span>
      </h2>
      <div className="my-20">
        <div className="mb-[270px]" style={{ background: "linear-gradient(180deg, #F4CD59 0%, #FFFFFF 100%)" }}>
          <div className="w-full max-w-[1440px] mx-auto relative px-5 md:px-20 h-[239px]">
            <p className="absolute -top-[35px] text-black text-[15px] font-gilroy-regular leading-[18px]">They trust us:</p>
            <div className="pt-[55px]">
                <TheyTrust/>
            </div>
          </div>
        </div>

        {/* We are part of: */}
        <div className="mb-[270px]" style={{ background: "linear-gradient(180deg, #5271FF 0%, #FFFFFF 100%)" }}>
          <div className="w-full max-w-[1440px] mx-auto relative px-5 md:px-20">
            <p className="absolute -top-[35px] text-black text-[15px] font-gilroy-regular leading-[18px]">We are part of:</p>
            <div className="flex flex-wrap justify-between">
              <Image src='/assets/microsoft.svg' alt="Logo" width={172.92} height={72.72} className="mt-[36px] h-[72.72px] w-[172px]" />
              <Image src='/assets/georgia-tech.svg' alt="Logo" width={104.46} height={104.75} className="mt-[103px] h-[104.75px] w-[104.46px]" />
              <Image src='/assets/fusen.svg' alt="Logo" width={181.71} height={84.74} className="mt-[30px] h-[84.74px] w-[181.71px]" />
              <Image src='/assets/create-x.svg' alt="Logo" width={90.85} height={81.15} className="mt-[115px] h-[81.15px] w-[90.85px]" />
              <Image src='/assets/ai-mircro.svg' alt="Logo" width={183.48} height={34.42} className="mt-[55px] h-[34.42px] w-[183.48px]" />
              <div className="mt-[81px]">
                <p className="mb-[16px] font-gilroy-regular text-[15px] leading-[18px] text-white">AI Partner:</p>
                <Image src='/assets/smartup.svg' alt="Logo" width={204.29} height={41.46} className="h-[41.46px] w-[204.29px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
