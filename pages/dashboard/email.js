import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import DashNav from "../components/dashNav";
import Navbar from "../components/navbar";

const Email = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmail] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/contact-collection")
      .then((res) => res.json())
      .then((data) => {
        setEmail(data);
        setIsLoading(false);
      });
  }, []);

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
        const url = `http://localhost:5000/contact-collection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = emails.filter((item) => item._id !== id);
              setEmail(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Emails</title>
      </Head>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
       
        <div className="drawer-content bg-gray-100  justify-center">
        <DashNav></DashNav>
          {/* divided  */}
          <h1 className="text-5xl text-center">Emails {emails.length} </h1>

          {isLoading ? (
                  <div className=" rounded-md p-4 max-w-2xl w-full mx-auto">
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
                </div>
          ) : (
            <div className="dashboard-content">
              {emails.map((email) => (
                <div className="email-title" key={email._id}>
                  <a href={`#${email._id}`}>
                    New message from {email.name} {email.email}
                  </a>
                  <div className="modal" id={`${email._id}`}>
                    {/* "#my-modal-2" */}
                    <div className="modal-box">
                      <h1 className="text-center font-bold">Email</h1>
                      <hr />
                      <p className="py-4">Name : {email.name}</p>
                      <hr />
                      <p className="py-4">Email : {email?.email}</p>
                    
                      <hr />
                      <p className="py-4">Body  : {email.message} </p>
                      <hr />
                      <img
                        width={100}
                        src={`data:image/png;base64,${email.image}`}
                        alt=""
                      />
                      
                      <div className="modal-action">
                        <button className="btn btn-outline btn-error" onClick={() => handleDelete(email._id)}>
                          {" "}
                          Delete{" "}
                        </button>
                        <a href="#" className="btn btn-outline btn-info">Close</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* divided  */}
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

export default Email;
