import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DashNav from '../components/dashNav';
import Swal from 'sweetalert2';
import Head from 'next/head';

const Medialist = () => {

  const [medias , setMedias] = useState([])
  const [loding , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
      fetch("http://localhost:5000/media")
      .then(res=> res.json())
      .then(data => {
        setMedias(data)
        setLoading(false)
      })

  },[ ])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/media/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = medias.filter((item) => item._id !== id);
              setMedias(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

    return (
        <div>
                <Head>
            <title>Media List</title>
          </Head>
          <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>

          
        {
          loding ?  <div className=" rounded-md p-4 max-w-2xl w-full mx-auto">
          <div className="animate-pulse flex space-x-96">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
               
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
          
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div> :  <div className="overflow-x-auto dashboard-content">
          <table className="table table-zebra w-full">
           
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
          {
            medias.map((media , index) => <tr key={media._id}>
              <th>{index + 1}</th>
              <td>{media.name}</td>
              <td>{media.subject}</td>
              <td><button className='bg-green-200 p-1'>
                
                <Link   href={{
                            pathname: "/dashboard/update-media/[id]",

                            query: { id: media._id },
                        }}>Edit</Link></button>
                
                 <button onClick={()=>handleDelete(media._id)} className='bg-red-600 p-1 border rounded'>Delete</button></td>
            </tr>  )
          }
              
            </tbody>
          </table>
        </div>
        }
          
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

export default Medialist;