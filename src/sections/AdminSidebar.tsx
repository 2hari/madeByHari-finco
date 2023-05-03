import React, { useState, useRef, useEffect } from "react"
import { Inter } from "next/font/google"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import ReadMe from "../../README.md"

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" })
const inter = `${interFont.variable} font-sans`

const AdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  // const [content, setContent] = useState("")

  // useEffect(() => {
  //   fetch(ReadMe)
  //     .then((res) => res.text())
  //     .then((text) => setContent(text))
  // }, [])

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sidebarRef.current!.contains(e.target as Node)) {
        setShowSidebar(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div className="z-50 group fixed right-5 bottom-5 lg:right-3 lg:bottom-3">
      <div className="absolute rounded-full -inset-1  bg-gradient-to-r from-primary-400 to-yellow-500 blur-sm opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="relative z-50 peer h-16 w-16 rounded-full bg-black overflow-hidden "
      >
        <Image
          src={"/assets/H-w.svg"}
          fill
          alt="logo Hari"
          className="z-50 object-cover"
        />
      </button>

      <div
        className={`z-50 fixed top-0 ${
          showSidebar ? "left-0" : "-left-96"
        } h-screen w-9/12 sm:w-72 bg-black shadow-2xl ease-out delay-150 duration-200 `}
        ref={sidebarRef}
      >
        <nav role="admin" className="px-3 py-4">
          <div className="relative overflow-y-auto overflow-x-hidden h-[95vh] flex flex-col justify-between">
            <div>
              <h3
                className={`text-2xl  px-2 sm:text-4xl sm:leading-10 text-white ${inter} mb-2 sm:mb-6 font-bold`}
              >
                Hi, I am Hari. <br />I built this.
              </h3>
            </div>
            <div className={`text-white ${inter} px-2`}>
              <h3 className="sm:text-xl mb-2 sm:mb-6 font-bold">
                Project Overview
              </h3>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-sm">
                {ReadMe}
              </ReactMarkdown>
            </div>

            <div className="px-2">
              <div>
                <h3 className={`sm:text-xl text-white ${inter} mb-6 font-bold`}>
                  Want to build somethings similiar ? Reach me out 👇
                </h3>
              </div>
              <a
                href="https://www.upwork.com/workwith/keshavm3"
                className="w-full bg-[#d1f5cb] text-white mb-4  rounded-2xl flex items-center justify-around"
              >
                <div className="flex items-center h-[36px] w-[72px] sm:h-[45px] sm:w-[90px] relative">
                  <Image src="/assets/Upwork-logo.svg" alt="upwork" fill />
                </div>
              </a>
              <button
                className={`w-full  text-xl ${inter} bg-white font-semibold py-1 sm:py-2 rounded-2xl`}
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AdminSidebar
