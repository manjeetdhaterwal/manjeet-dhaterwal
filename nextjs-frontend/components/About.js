import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const About = ({ about, education }) => {
  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    // <div className="bg-grey-50" id="about">
    //   <div className="container flex flex-col items-center py-16 md:py-20 ">
    //     <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-center">
    //       <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
    //         Who am I?
    //       </h2>
    //       <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
    //         I'm {about.name}, {about.job}
    //       </h4>
    //       <p className="pt-6 font-body leading-relaxed text-grey-20">
    //         {about.desc}
    //       </p>
    //       {/* <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
    //         <div className="flex items-center justify-center sm:justify-start">
    //           <p className="font-body text-lg font-semibold uppercase text-grey-20">
    //             Connect with me
    //           </p>
    //           <div className="hidden sm:block">
    //             <i className="bx bx-chevron-right text-2xl text-primary"></i>
    //           </div>
    //         </div>
    //         <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
    //           <a href="/">
    //             <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
    //           </a>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-2/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm {about.name}, {about.job}
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            {about.desc}
          </p>

          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Here are some links
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {/* <a href="https://www.hackerrank.com/manjeetdhaterwal" className="pl-4" target="_blank">
                <i className="fa fa-hackerrank text-2xl text-primary hover:text-yellow"></i>
              </a> */}

              <a href="https://auth.geeksforgeeks.org/user/manjeetdhaterwal/practice" className="pl-4" target="_blank">
                <img src='/assets/img/gfg-logo.png' className="h-10 hover:text-yellow"></img>
              </a>

              <a href="https://www.hackerrank.com/manjeetdhaterwal" className="pl-4" target="_blank">
                <img src='/assets/img/HackerRank_Icon.svg' className="h-10 hover:text-yellow"></img>
              </a>

              <a href="https://leetcode.com/manjeetd13/" className="pl-4" target="_blank">
                <img src='/assets/img/leetcode-logo.webp' className="h-10 hover:text-yellow"></img>
              </a>
              <a href="https://www.interviewbit.com/profile/manjeetdhaterwal" className="pl-4" target="_blank">
                <img src='/assets/img/interviewbit-logo.webp' className="h-10 hover:text-yellow"></img>
              </a>
            </div>
          </div>

        </div>



        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-3/5 lg:pl-12 lg:pt-0">
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Education History
          </h3>
          <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">

            <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

            {education.map((item, index) => {
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
                          <span className="block font-body font-bold text-grey-40">{item.year}</span>
                          <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">{item.name}</span>
                          <div className="pt-2">
                            <span className="block font-body text-black">{item.desc}</span> <b>{item.marks}</b>
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
      </div>
    </div>

  )
}

export default About