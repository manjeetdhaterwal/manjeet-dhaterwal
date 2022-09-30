import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import { useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

const Profile = ({ profile, socail }) => {
  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's ${profile.name}`,
      "guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore/>"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="rounded-full border-8 border-primary shadow-xl">
          <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
        </div>
        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
          <h1 className="main_heading_h1 text-center font-header text-4xl text-white h-20 sm:text-left sm:text-5xl md:text-6xl ">
            <span className='text-[#5540af]'>.</span>{text}
          </h1>
          <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-3xl text-yellow"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {socail.map((item, index) => {
                return (<Link href={item.href} key={index}><a className="pl-4" target="_blank" rel="noopener noreferrer">
                  <i className={`bx bxl-${item.name} text-2xl text-white hover:text-yellow`}></i>
                </a></Link>)
              })}
            </div>
          </div>
          <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link href={'/#projects'}><div className="buttons text-center md:text-center md:posit">
                <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>My Projects</button>
              </div></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile