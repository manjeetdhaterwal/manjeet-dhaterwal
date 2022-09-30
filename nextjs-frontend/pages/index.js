import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Script from "next/script"
import { useEffect } from 'react';

import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import About from '../components/About';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Statistics from '../components/Statistics';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Footer from '../components/Footer';




export default function Home({ profile, socail, about, education, projects, workexperience, statistics, skill }) {
  // console.log(education);
  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);


  return (
    <>
    {/* <style>{styles}</style> */}

      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />
        <title>{profile.name}- Developer | Coder | Software Geek</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <NavBar />
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      <div>
        <div className="relative bg-cover bg-center bg-no-repeat py-8 main_div_bg" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)"}}>
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from  bg-cover bg-center bg-no-repeat" />
          <Profile profile={profile} socail={socail} />
        </div>

        <About about={about} education={education} />
        <Skills skill={skill} />
        <WorkExperience workexperience={workexperience} />
        <Project Projects={projects} />

        {/* latest client  */}
        {/* <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            <span className="m-8 block">
              <img src="/assets/img/logo-coca-cola.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
            </span>
            <span className="m-8 block">
              <img src="/assets/img/logo-apple.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
            </span>

            <span className="m-8 block">
              <img src="/assets/img/logo-netflix.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
            </span>

            <span className="m-8 block">
              <img src="/assets/img/logo-amazon.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
            </span>

            <span className="m-8 block">
              <img src="/assets/img/logo-stripe.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
            </span>
          </div>
        </div>
      </div>
        </div> */}


        <Statistics statistics={statistics} />
        <Contact />
        <Footer />
      </div>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved.
          </p>
          <div className="flex items-center text-white  justify-center pt-5 sm:justify-start sm:pt-0">
            @manjeetdhaterwal
            {/* <a href="/">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "edrb5ry8",
    dataset: "production",
    useCdn: false
  });
  const query1 = `*[_type == "project"]`;
  const projects = await client.fetch(query1);

  const query2 = `*[_type == "profile"][0]`;
  const profile = await client.fetch(query2);

  const query3 = `*[_type == "about"][0]`;
  const about = await client.fetch(query3);

  const query4 = `*[_type == "social"]`;
  const socail = await client.fetch(query4);

  const query5 = `*[_type == "workexperience"]`;
  const workexperience = await client.fetch(query5);

  const query6 = `*[_type == "statistics"][0]`;
  const statistics = await client.fetch(query6);

  const query7 = `*[_type == "skill"]`;
  const skill = await client.fetch(query7);

  const query8 = `*[_type == "education"]`;
  const education = await client.fetch(query8);
  return {
    props: {
      projects, profile, about, socail, workexperience, statistics, skill, education
    }
  }
}