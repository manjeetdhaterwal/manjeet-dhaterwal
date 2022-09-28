import React, {useState} from 'react'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [filter, setFilter] = useState(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

  const submit = async (e)=>
  {
    e.preventDefault();
    console.log(email);
    if(email.length <= 0 || !filter.test(email))
    {
      alert("Please provide valid email")
    }
    else{
      const data = {email};
      try {
        const res = await fetch('/api/club', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (res.status == 200) {
          setEmail('')
        }
      } catch (error) {
        console.log(error)
      }
    }

    setEmail('');
  }

  return (
    <>
    {/* <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
          style={{ "backgroundImage": "url(/assets/img/map.png)" }}></div> */}
          <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
          style={{ "backgroundImage": "url(/assets/img/bg-cta.jpg)" }}>
          <div className="container relative z-30">
            <h3
              className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
              Keep <span className="font-bold">up-to-date</span> <br />
              with what I'm up to
            </h3>
            <form className="mt-6 flex flex-col justify-center sm:flex-row">
              <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="email"
                id="email" placeholder="Give me your Email" value={email} onChange = {(e)=>{setEmail(e.target.value)}}/>
              <button onClick={submit}
                className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                Join the club
              </button>
            </form>
          </div>
        </div>
    </>
    
  )
}

export default Footer