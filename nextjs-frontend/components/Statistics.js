import React from 'react'
import Image from 'next/image'

const Statistics = ( {statistics}) => {
  return (
    <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style={{"backgroundImage": "url(/assets/img/experience-figure.png)"}} id="statistics">
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <Image src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" width="230px" height="150px" alt="icon project" />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  {statistics.finishedProjects}
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Finished Projects
                </h4>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <Image src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" width="230px" height="150px"   alt="icon award" />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  {statistics.awardwin}
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Awards Won
                </h4>
              </div>
            </div>

            <div
              className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <Image src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20" width="230px" height="150px" 
                  alt="icon happy clients" />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  {statistics.happyclient}
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Happy Clients
                </h4>
              </div>
            </div>

            <div
              className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <Image src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" width="230px" height="150px"  alt="icon puzzle" />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  {statistics.bugFixed}
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Bugs Fixed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics