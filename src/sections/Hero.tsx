import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"
import { MdSlowMotionVideo } from "react-icons/md"
import AdminSidebar from "./AdminSidebar"

const Hero = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* PAGE CONTENT */}
          <div className="lg:container mx-auto py-2 px-6 flex justify-between items-center">
            <div className="flex items-center gap-10">
              <Image src="assets/logo.svg" alt="logo" height={35} width={117} />
              <div className="hidden lg:flex items-center gap-7">
                <Link href="/" className="text-primary font-semibold text-lg">
                  Home
                </Link>
                <Link href="/" className="text-gray-800 font-medium text-lg">
                  About
                </Link>
                <Link href="/" className="text-gray-800 font-medium text-lg">
                  Pricing
                </Link>
                <Link href="/" className="text-gray-800 font-medium text-lg">
                  Features
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 relative">
              <button className="max-md:btn-sm btn btn-active rounded-none hover:bg-primary border-none md:after:content-star after:absolute after:top-16 after:-right-4">
                Download Now
              </button>
              <label htmlFor="my-drawer" className="lg:hidden drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="lg:container mx-auto md:mt-20 xl:mt-0 px-6">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
              <div className="flex flex-col gap-5 lg:pt-16 max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
                <p className="text-3xl md:text-4xl xl:text-6xl font-bold after:absolute md:after:content-glow after:-top-36 after:left-5 lg:after:-top-24 lg:after:left-40 after:z-[-1]">
                  Make The Best Financial Decisions
                </p>
                <p>
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                  Aliquot Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                  Port-titor.
                </p>
                <div className="flex items-center gap-5">
                  <button className="max-md:btn-sm btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none">
                    Get Started <BsArrowRight className="text-xl" />
                  </button>
                  <div className="flex gap-3 cursor-pointer items-center">
                    <MdSlowMotionVideo className="text-3xl" />
                    <p className="text-xl font-medium">Watch</p>
                  </div>
                </div>
                <div className="hidden md:block mt-8 h-[217px] w-[291px] lg:h-[290px] lg:w-[470px] xl:h-[350px] xl:w-[569px] relative md:before:content-star before:absolute before:-top-4 before:left-16 lg:before:top-8 lg:before:left-32">
                  <Image
                    src="/assets/hero2.svg"
                    alt="downhero"
                    fill
                    className="object-contain "
                  />
                </div>
              </div>
              <div className="mt-4 h-[490px] w-[350px] md:h-[485px] md:w-[460px] lg:h-[653px] lg:w-[568px] xl:h-[780px] xl:w-[740px] relative">
                <Image
                  src="/assets/hero.svg"
                  alt="hero-section"
                  fill
                  className="object-cover overflow-visible"
                />
              </div>
            </div>
          </div>

          {/* PAGE CONTENT END */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content space-y-6">
            <Link href="/" className="text-primary font-semibold text-lg">
              Home
            </Link>
            <Link href="/" className="text-gray-800 font-medium text-lg">
              About
            </Link>
            <Link href="/" className="text-gray-800 font-medium text-lg">
              Pricing
            </Link>
            <Link href="/" className="text-gray-800 font-medium text-lg">
              Features
            </Link>
          </ul>
        </div>
      </div>
      <AdminSidebar />
    </div>
  )
}

export default Hero
