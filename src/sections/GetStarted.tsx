import Image from "next/image"
import React from "react"
import { AiFillApple } from "react-icons/ai"
const GetStarted = () => {
  return (
    <div className="lg:container mx-auto md:px-6 relative md:my-40">
      <div className="flex flex-col md:flex-row justify-between items-center bg-black py-5 lg:py-10 before:absolute md:before:content-glow before:-top-52 before:-left-40 before:z-[-1] relative">
        <div className="flex flex-col gap-4 pl-4 lg:pl-20 max-lg:max-w-sm relative">
          <p className="text-4xl font-bold text-white after:absolute md:after:content-ring2 after:z-30 after:-bottom-44 after:left-0 lg:after:-bottom-48  lg:after:left-0">
            Ready To Get Started?
          </p>
          <p className="text-white">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
            Vulputate.
          </p>
          <button className="bg-white text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary after:absolute md:after:content-star after:-bottom-60 after:left-0 xl:after:bottom-0 xl:after:-left-20">
            Download App
            <AiFillApple className="text-xl" />
          </button>
        </div>
        <div className="h-[320px] w-[350px] lg:h-[460px] lg:w-[500px] relative after:absolute md:after:content-ring after:z-30 after:-top-36 after:right-0 lg:after:-top-20 lg:after:right-0">
          <Image
            src="/assets/iphoneGroup.svg"
            alt="getstarted"
            fill
            className="object-cover z-40"
          />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
