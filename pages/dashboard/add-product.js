import Link from 'next/link';
import React from 'react';
import DashNav from '../components/dashNav';


const Contact = () => {
    return (
        <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>
            <h1>this is Add product</h1>

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

export default Contact;