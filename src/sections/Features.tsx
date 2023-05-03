import React from "react"
import Image from "next/image"

const Features = () => {
  return (
    <div className="px-6 md:py-0  lg:container mx-auto ">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="h-[290px] w-[290px] xs:h-[395px] xs:w-[395px] md:h-[500px] md:w-[500px] xl:h-[720px] xl:w-[720px] relative">
          <Image
            src="/assets/subhero.svg"
            alt="subhero"
            fill
            className="object-cover overflow-visible"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 items-start w-full md:max-w-[50%] ">
          <p className="text-primary font-medium md:text-lg items-start">
            Features
          </p>
          <p className="text-2xl md:text-4xl font-bold items-start">
            Finco Premium
          </p>
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src="/assets/budget.svg"
                alt="budget"
                height={24}
                width={24}
              />
              <p className="text-lg md:text-2xl font-semibold">
                Budgeting Intervals
              </p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-1 md:gap-3">
              <Image src="/assets/b2.svg" alt="b2" height={22} width={20} />
              <p className="text-lg md:text-2xl font-semibold">
                Budgeting Intervals
              </p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-1 md:gap-3">
              <Image src="/assets/b3.svg" alt="b3" height={24} width={24} />
              <p className="text-lg md:text-2xl font-semibold">
                Budgeting Intervals
              </p>
            </div>
            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
