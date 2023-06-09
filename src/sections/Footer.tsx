import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <div className="bg-[#fdfdfd]">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:container mx-auto py-10 px-6">
        <div className="flex flex-col gap-4 items-start">
          <Image src="/assets/logo.svg" alt="logo" height={40} width={117} />
          <div className="flex gap-2 items-start">
            <Image src="/assets/email.svg" alt="email" height={25} width={24} />
            <p className="text-sm md:text-lg font-medium">help@rownok.com</p>
          </div>
          <div className="flex gap-2 items-start">
            <Image src="/assets/phone.svg" alt="phone" height={25} width={24} />
            <p className="text-sm md:text-lg font-medium">+88018763646353</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-2xl md:text-4xl font-semibold">Links</p>
          <p className="md:text-xl font-medium">Home</p>
          <p className="md:text-xl font-medium">About</p>
          <p className="md:text-xl font-medium">Booking</p>
          <p className="md:text-xl font-medium">Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-2xl md:text-4xl font-semibold">Legal</p>
          <p className="md:text-xl font-medium">Terms Of Use</p>
          <p className="md:text-xl font-medium">Privacy Policy</p>
          <p className="md:text-xl font-medium">Cookie Policy</p>
          <p className="md:text-xl font-medium">Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-2xl md:text-4xl font-semibold">Product</p>
          <p className="md:text-xl font-medium">Take Tour</p>
          <p className="md:text-xl font-medium">Live Chat </p>
          <p className="md:text-xl font-medium">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-2xl md:text-4xl font-semibold">News Letter</p>
          <p className="md:text-xl font-medium">Stay Up To Date</p>
          <div className="flex items-start flex-col gap-2">
            <input
              type="text"
              className="px-3 py-3 bg-white"
              placeholder="Your email"
            />
            <button className="bg-black w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
