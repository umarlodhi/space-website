"use client"

import { slideInFromTop } from '@/utils/motion'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center min-h-screen justify-center w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]">
            <motion.div
              variants={slideInFromTop}
              className="text-[40px] font=medium text-center text-gray-200">
                Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> 
                {" "}
                &{" "} 
            </span>
            Security
            </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center absolute w-auto h-auto translate-y-[-50px] z-[20]">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                <Image src="/lockTop.png" alt="lock top" width={50} height={50}
                    className="translate-y-5 transition-all duration-200 group-hover:translate-y-11" />
                <Image src="/lockMain.png" alt="lock main" width={70} height={70}
                    className="z-10" />
            </div>
            <div className="Welcome-box px-[15px] py-[4px] border border-[#7042f88b] my-[20px] z-[20] opacity-[0.9]">
                <h1 className="Welcome-text text-[12px] ">Encryption</h1>
            </div>     
        </div>
        <div className="absolute z-[20] bottom-[10px] px-[5px]">
            <div className="cursive text-[20px] font-medium text-center text-gray-200">
                Secure your data with end-to-end encryption
            </div>
        </div>
        <div className="w-full flex items-start justify-center absolute">
            <video src="/encryption.webm"
              loop muted autoPlay playsInline preload="false" 
              className="w-full h-auto">

              </video>
        </div>
    </div>
  )
}

export default Encryption