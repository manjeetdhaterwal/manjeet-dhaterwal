import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [filter, setFilter] = useState(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      alert("Name can't be blank");  
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0 || !filter.test(email)) {
      alert('Please provide a valid email address');
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      alert("Message can't be blank");  
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullname, email, message);
    let isValidForm = handleValidation();

    if (isValidForm) {
      const data = { fullname, email, message }

      // console.log("checked"); 

      try {
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (res.status == 200) {
          setFullname('')
          setEmail('')
          setMessage('')
        }
      } catch (error) {
        console.log(error)
      }
    }






    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((res) => {
    //   console.log('Response received')
    //   if (res.status === 200) {
    //     console.log('Response succeeded!')
    //     setFullname('')
    //     setEmail('')
    //     setMessage('')
    //   }
    // })


  }

  const change = (e) => {
    if (e.target.id === 'fullname') {
      setFullname(e.target.value);
    }
    else if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.id === 'message') {
      setMessage(e.target.value);
    }
  }

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here&apos;s a contact form
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      {/* <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
              condimentum turpis nisl sem, viverra habitasse urna ante lobortis
              fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
              accumsan.
            </p>
          </div> */}
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input className="mr-3 w-full rounded border-black-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name" type="text" id="fullname" value={fullname} onChange={change} />
          <input
            className="mt-6 w-full rounded border-black-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email" type="text" id="email" value={email} onChange={change} />
        </div>
        <textarea className="mt-6 w-full rounded border-black-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message" id="message" cols="30" rows="10" value={message} onChange={change}></textarea>
        <button
          className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+91) 87086 42488
          </p>
        </div>
        <div
          className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            manjeet.dhaterwal@gmail.com
          </p>
        </div>
        <div
          className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            Hisar, Haryana, IN
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact