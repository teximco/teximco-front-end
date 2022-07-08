import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import DashNav from '../components/dashNav';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useRouter } from 'next/router';

const AddProducts = () => {

  const [error , setError] = useState(false)
  const [img , setImg] = useState('')
  const [imgSecond , setImgSecond] = useState('')
  const [name , setName] = useState('')
  const [category , setCategory] = useState('')
  const [user, loading, errorAuth] = useAuthState(auth);
  const router = useRouter();
  useEffect(()=>{
    if(img?.size > 500000){
      setError(true)
    }
    if(img?.size < 500000){
      setError(false)
    }
 
  })

  useEffect(()=>{
    if(!user){
      router.push('/dashboard/login')
    }
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    const date = new Date().toDateString()
    
    const formData = new FormData()
    formData.append('img' , img)
    formData.append('imgSecond' , imgSecond)
    formData.append('name' , name)
    formData.append('category' , category)
    formData.append('date' , date)

    
    fetch("https://infinite-spire-29292.herokuapp.com/products", {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
  
        if (data.insertedId) {
          toast(`${name}, You Added a Product Item`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        e.target.reset();
      });



   

  }
    return (
        <div>
          <Head>
            <title>Add Products</title>
          </Head>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>
          
          <div className="container">
              <h1 className='text-4xl text-center mt-6 mb-10'>Add Media</h1>
              <form onSubmit={handleSubmit}>
                <div className="form mb-2">
                  <p className='font-bold'>Title </p>
                  <p className='font-bold'>:</p>
                  <input onBlur={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" className="input input-bordered input-info w-full max-w-lg" />
                </div>

                <div className="form">
                  <p className='font-bold'>Category </p>
                  <p className='font-bold'>:</p>
                  <select  type="text"  onBlur={(e)=>setCategory(e.target.value)} className="input input-bordered input-info w-full h-10 max-w-lg mt-5 mb-5">
                  <option value="Sweater">Sweater</option>
                  <option value="Knitwear">Knitwear</option>
                  <option value="Jeanswear">Jeanswear</option>
                  <option value="Outerwear">Outwear</option>
                  <option value="Bags-and-Towels">Bags/Towels</option>
                  <option value="Hades-and-Caps">Hades/Caps</option>
                  </select>
                </div>
           
               <div className="form">
                  <p className='font-bold'>Image 1 </p>
                  <p className='font-bold'>:</p>
              
                  <div className="form-file">
             
              <input
                className="file input-bordered input-info w-full max-w-lg m-4"
                name="image"
              onChange={(e) => setImg(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
              </div>
          
              </div>

               <div className="form">
                  <p className='font-bold'>Image 2 </p>
                  <p className='font-bold'>:</p>
              
                  <div className="form-file">
             
              <input
                className="file input-bordered input-info w-full max-w-lg m-4"
                name="image"
              onChange={(e) => setImgSecond(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
              </div>
              </div>
              {
                  error && <small className='text-center block text-red-600'>file size cannot be more than 500kb</small>
                }
             

                <button disabled={error}  type="submit" className="shop-button3 block  m-auto mt-5">Submit</button>
              </form>
            </div>

          </div>
          

          <div className="drawer-side  fixed h-full">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <img src="https://i.ibb.co/wyZWxdS/Teximco-logo-main-300x53.png" alt="" />
                <div className="divider"></div> 
            <label className="sideNav">
              {" "}
              <Link href="/dashboard">Dashboard</Link>
            </label>

            <label htmlFor="touch2">
              <span className="span">Product</span>
            </label>

            <input type="checkbox" id="touch2" />
            <ul className="slide2">
              <li>
                {" "}
                <Link href="/dashboard/add-product">Add Product</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/dashboard/product-list">Product List</Link>
              </li>
            </ul>

            <label htmlFor="touch">
              <span className="span">Media</span>
            </label>
            <input type="checkbox" id="touch" />
            <ul className="drop">
              <li>
                {" "}
                <Link href="/dashboard/add-media">Add Media</Link>
              </li>
              <li>
                <Link href="/dashboard/media-list">Media List</Link>
              </li>
            </ul>
            <label className="sideNav">
              {" "}
              <Link href="/dashboard/email">Email</Link>
            </label>
          </ul>
          </div>
        </div>
     </div>
    );
};

export default AddProducts;