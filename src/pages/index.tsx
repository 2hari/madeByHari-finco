import Head from "next/head"
import Features from "@/sections/Features"
import ChooseUs from "@/sections/ChooseUs"
import Customize from "@/sections/Customize"
import Testimonials from "@/sections/Testimonials"
import Faq from "@/sections/Faq"
import GetStarted from "@/sections/GetStarted"
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Made by Hari: Finco</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <ChooseUs />
      <Customize />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  )
}
