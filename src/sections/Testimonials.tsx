import React from "react"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="px-6 md:py-0 xl:px-0  lg:container mx-auto">
      <p className="text-xl font-medium text-center py-2">Testimonials</p>
      <p className="text-center text-2xl md:text-4xl font-bold">
        What Our Users <br /> Say About Us?
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center relative">
        <div className="h-[290px] w-[290px] xs:h-[395px] xs:w-[395px] md:h-[500px] md:w-[500px] xl:h-[720px] xl:w-[720px] relative">
          <Image
            src="/assets/testimonials.svg"
            alt="testimonial"
            fill
            className="object-cover overflow-visible"
          />
        </div>
        <div className="flex flex-col gap-5 items-start after:absolute md:after:content-star after:bottom-0 after:left-0 lg:after:bottom-8 lg:after:left-0">
          <p className="text-lg md:text-2xl font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,{" "}
            <br />
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor{" "}
            <br />
            Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
          <p className="text">Rownok Mahbub</p>
          <Image
            src="/assets/person.svg"
            alt="person"
            height={40}
            width={192}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
