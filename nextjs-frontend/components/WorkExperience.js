import React, { useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const WorkExperience = ({ workexperience }) => {

  // const [mon, setmon] = useState('');
  // const [year, setyear] = useState('');
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  // const convertDate = ((date)=>{
  //         setyear(date.substr(0, 4))
  //         setmon(months[Integer.parse(date.substr(5, 7))])
  //         console.log(mon, year)
  //         return (mon, year)
  // })

  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I did before this
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        {workexperience.map((item, index) => {
          return (
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left" key={index}>
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <img src={builder.image(item.logo).width(200).url()} className="h-auto w-32" alt="company logo" />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span
                    className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">{item.stdate} - {item.enddate}</span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">{item.jobrole}</span>
                      <div className="pt-2">
                        <span className="block font-body text-black">{item.jobdesc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkExperience