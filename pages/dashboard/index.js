import Head from "next/head";
import Link from "next/link";
import React, { Outlet, useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import DashNav from "../components/dashNav";
import Navbar from "../components/navbar";

const Dashboard = () => {

  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];


  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
    
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 w-full">
        <DashNav></DashNav>


          <div className="chart">
          <h4>Investment VS Revenue</h4>
          <LineChart width={450} height={400} data={data}>
            <XAxis dataKey="month" />
            <YAxis dataKey="sell" />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
          </div>
        </div>


        <div className="drawer-side fixed h-full">
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

export default Dashboard;
