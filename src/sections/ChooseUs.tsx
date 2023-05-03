import Image from "next/image"
import React from "react"

const ChooseUs = () => {
  return (
    <div className="px-6 md:py-0 mt-8 lg:mt-0 xl:px-0  lg:container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-3 md:gap-5 items-start w-full md:max-w-[50%] ">
          <p className="text-primary font-medium md:text-lg items-start">
            Advantage
          </p>
          <p className="text-2xl md:text-4xl font-bold items-start">
            Why Choose Finco?
          </p>
          <div className="flex flex-col gap-1 md:gap-4">
            <div className="flex items-center gap-1 md:gap-3">
              <div className="h-8 w-8 md:h-12 md:w-12 relative">
                <Image
                  src="/assets/bell.svg"
                  alt="bell"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-2xl font-semibold">
                Clever Notifications
              </p>
            </div>

            <p>
              Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis{" "}
              <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
        <div className="h-[290px] w-[290px] xs:h-[395px] xs:w-[395px] md:h-[500px] md:w-[500px] xl:h-[720px] xl:w-[720px] relative">
          <Image
            src="/assets/choose.png"
            alt="chose"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
