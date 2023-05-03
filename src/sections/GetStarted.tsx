import Image from "next/image"
import React from "react"
import { AiFillApple } from "react-icons/ai"
const GetStarted = () => {
  return (
    <div className="lg:container mx-auto md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center bg-black  py-5 lg:py-10">
        <div className="flex flex-col gap-4 pl-4 lg:pl-20 max-lg:max-w-sm">
          <p className="text-4xl font-bold text-white">Ready To Get Started?</p>
          <p className="text-white">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
            Vulputate.
          </p>
          <button className="bg-white text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary">
            Download App
            <AiFillApple className="text-xl" />
          </button>
        </div>
        <div className="h-[320px] w-[350px] lg:h-[460px] lg:w-[500px] relative">
          <Image
            src="/assets/iphoneGroup.svg"
            alt="getstarted"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
