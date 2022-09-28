import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import styles from '../styles/Project.module.css'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Project = ({ Projects }) => {
  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);


  return (

    <div className="container py-16 md:py-20" id="projects">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Projects
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {/* {Projects.map((x, index)=>
        {
            return (<div key={index}>
            <a href={x.href} className="mx-auto transform transition-all hover:scale-105 md:mx-0" target="_blank">
            <img src={builder.image(x.image).width(200).url()} className="w-full shadow" alt="portfolio image" />
          </a>
          </div>)
        })} */}

        {/* <a href= {Projects[0].href} className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <img src={builder.image(Projects[0].image).width(200).url()} className="w-full shadow" alt="portfolio image" />
        </a>  */}
        <Link href="https://manjeetdhaterwal.github.io/weather-app-react/">
          <a className="mx-auto transform transition-all hover:scale-105 md:mx-0" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/weatherapp-image.jpeg" className="w-full shadow" width="650px" height="400px" alt="weatherapp image" />
            {/* <div className={styles.overlay}>My Name is John</div> */}
          </a>
        </Link>

        <Link href="https://manjeetdhaterwal.github.io/react-todos-list/">
          <a className="mx-auto transform transition-all hover:scale-105 md:mx-0" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/todolist.png" className="w-full shadow" width="650px" height="400px" alt="todolist image" />
          </a>
        </Link>

        <Link href="https://github.com/manjeetdhaterwal/LibraryManagemnet">
          <a className="mx-auto transform transition-all hover:scale-105 md:mx-0" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/library-image.png" className="w-full shadow" width="650px" height="400px" alt="portfolio image" />
          </a>
        </Link>
        <Link href="/">
          <a className="mx-auto transform transition-all hover:scale-105 md:mx-0" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/ichatapp-image.png" className="w-full shadow" width="650px" height="400px" alt="portfolio image" />
          </a>
        </Link>

        {/* <figure className="imghvr-stack-up">
          <img src="/assets/img/weatherapp-image.jpeg" alt="example-image"/>
            <figcaption>
              <h3 className="ih-fade-down ih-delay-sm ">Oscar Wilde</h3>
              <p className="ih-zoom-in ih-delay-md">
                <i>"I have the simplest tastes, I am always satisfied with the best."</i>
              </p>
              <a className="ih-fade-up ih-delay-lg button" href="#">Read More</a>
            </figcaption>
            <a href="#"></a>
        </figure> */}
      </div>
    </div>
  )
}

export default Project