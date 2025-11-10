import React from 'react'
import Image from 'next/image';
import letswork from '@/assets/careers/letswork.png';

const LetsWorkTogether = () => {
  return (
    <section className='py-16 px-4 lg:px-16'>
        <div className="container mx-auto relative justify-center items-center flex flex-col gap-12 text-center">
            <Image src={letswork} alt="Lets Work Together" width={1106} height={300} className='object-cover ' />
            <div className=" items-center absolute w-xl">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">Let's Work Together</h2>
                    <p className="text-lg text-black">Whether you’re a fresher or an experienced professional, explore Pinnacle Infotech careers for opportunities to grow, learn, and lead.</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center my-4">
                    <a href="#careers_banner"><button className="bg-white text-[#1797C5] px-4 py-2 rounded-lg">Ask us any Questions</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LetsWorkTogether