import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar";
import { toast } from "react-toastify";
import { useState } from "react";

const Contact = () => {

  const [img , setImg] = useState('')
  const [email , setEmail ] = useState('')
  const [name , setName ] = useState('')
  const [message , setMessage ] = useState('')


  console.log(email, name , message , img )



  const handleSubmit = (event) => {
    event.preventDefault();
  

    const formData = new FormData()
    formData.append('img', img)
    formData.append('email', email)
    formData.append('name', name);
    formData.append('message', message);

    fetch("http://localhost:5000/contact-collection", {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast(`${name}, Thank You For Contacting Us`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        event.target.reset();
      });

  };
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar></Navbar>
      <h1 className="text-center text-5xl mt-10 mb-24">Contact Us</h1>
      <div className="contact-container">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <a href="https://2piratebay.org"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
        <div className="form-container">
          <h1 className="text-4xl mb-5 mt-2">Get In Touch</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              
              onBlur={e => setName(e.target.value)}
              placeholder="Full Name"
              className="input input-bordered input-info w-full max-w-xs m-4"
            />
            <input
              type="text"
              name="email"
              onBlur={e => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="input input-bordered input-info w-full max-w-xs m-4"
            />
            <textarea
              name="message"
             
              onBlur={e => setMessage(e.target.value)}
              className="textarea textarea-info input-bordered input-info h-full w-full max-w-xs m-4"
              placeholder="Message"
            ></textarea>

            <div className="form-file">
              <input
                className="file input-bordered input-info w-full max-w-xs m-4"
                name="image"
                onBlur={(e) => setImg(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
            </div>
          
            <br />
            <button type="submit" className="shop-button3  m-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
