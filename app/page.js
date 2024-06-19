'use client'
import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import Recruitment from "./components/Recruitment";
import Hira from "./components/Hira";
import Partner from "./components/Partner";
import AllInOne from "./components/AllInOne";

export default function Home() {
  const iframeRef = useRef(null);

  // useEffect(() => {
  //   const sendCustomCSS = () => {
  //     console.log("Sending custom CSS to SmartUp Agent...");
  //     const iframe = iframeRef.current;
  //     const cssCode = `
  //       @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');

  //       .css-code {
  //         font-family: 'IBM Plex Sans', sans-serif;
  //       }

  //       .agent {
  //         background-color: #ffffff !important;
  //       }
  //       .send-message {
  //         background-color: #5271FF !important;
  //         color: white !important;
  //       }

  //       .send-message,
  //       .restart-chat {
  //         border-radius: 100px !important;
  //       }

  //       .message-input {
  //         border: 1px solid gray !important;
  //         border-radius: 10px !important;
  //       }

  //       .agent-header {
  //         background-color: #E3E7FF !important;
  //         color: black !important;
  //         border-radius: 10px 10px 0 0 !important;
  //         text-align: left !important;
  //         justify-content: space-between !important;
  //       }

  //       .legend-message {
  //         display: none !important;
  //       }

  //       .agent-profile-picture {
  //         display: block !important;
  //       }

  //       .message {
  //         border-radius: 10px !important;
  //         background-color: #5271FF !important;
  //       }
  //     `;

  //     iframe.contentWindow.postMessage({ type: "customCSS", css: cssCode }, "https://www.smartup.lat");
  //   };

  //   const iframe = iframeRef.current;
  //   iframe.addEventListener('load', sendCustomCSS);

  //   return () => {
  //     iframe.removeEventListener('load', sendCustomCSS);
  //   };
  // }, []);

  return (
    <>
      <div className="bg-custom-gradient-v2 md:bg-custom-gradient flex items-center justify-center mt-[70px]">
        <div className="max-w-[1440px] w-full mx-auto md:px-20 px-5 pb-[70px] lg:pb-[140px] mt-[10px]">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-16 sm:gap-40 gap-10">
            <div className="text-white relative">
              <h3 className="font-gilroy-medium text-[20px] leading-[24.26px]">Hiring Assistant | Recruiting Platform</h3>
              <h2 className="max-w-[413px] sm:text-[64px] text-[60px] sm:leading-[79.23px] leading-[70px] font-gilroy-bold">Recruitment made easy<span className="text-[#F4CD59]">.</span></h2>
              <h3 className="font-gilroy-regular text-[28px] leading-[34.66px]">The <span className="text-[#F4CD59] font-gilroy-bold"> all-in-one </span> platform for recruiters powered by <span className="text-[#F4CD59] font-gilroy-bold">AI</span></h3>
              <Link href='https://appv2.thestrainer.co/login' target='_blank' className='mt-10 border-[3px] border-white text-white w-[197px] h-[59px] rounded-[10px] font-gilroy-bold text-xl flex items-center justify-center'>Start for Free</Link>
              <Image src='/assets/robot.svg' alt="Robot" width={262} height={262} className="max-w-[150px] sm:max-w-[262px] absolute bottom-[-29px] sm:bottom-[-150px] right-[-7px] lg:right-[-90px] xl:right-[-110px] " />
            </div>
            <div>
              <div className="h-[511px] max-w-[429px] md:w-[429px] border border-[#5271FF] rounded-[20px]">
                <iframe
                  id="smartup-element"
                  ref={iframeRef}
                  style={{ borderRadius: '20px', width: '100%', height: '100%', background: 'white' }} 
                  src="https://www.smartup.lat/agente/strainer-hira?mode=iframe">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="w-full border-b border-blue">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-5 px-5 md:px-20 py-[27px]">
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Easy-to-use ATS<span className="text-[#F4CD59]">.</span></h2>
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Specialized AI agents<span className="text-[#F4CD59]">.</span></h2>
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Business opportunities<span className="text-[#F4CD59]">.</span></h2>
        </div>
      </div>

      {/* Artificial Intelligence Section */}
      <ArtificialIntelligence/>

      {/* Recruitment Section */}
      <Recruitment/>

      {/* HIRA Section */}
      <Hira/>

      {/* All in One Section */}
      <AllInOne/>

      {/* Partner Section */}
      <Partner/>
    </>
  );  
}
