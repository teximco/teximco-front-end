import Link from "next/link";
import React from "react";

const Arrivals = () => {
  return (
    <>
      <h1 className="arrival-title text-6xl mt-24 text-center">Arrivals</h1>
      <p className="text-center text-sm mt-10">
        you can buy any kind of products from here
      </p>
      <div className="card-container">
        <div className="card">
          <figure>
            <img
              src="https://i.pinimg.com/originals/48/7e/d7/487ed788699d365d3a1b620806f31fb3.jpg"
              alt="women cloths"
            />
          </figure>
        </div>
        <div className="card">
        <Link
            href={{
              pathname: "/products/[catagory]",
              query: { catagory: "Sweater" },
            }}
          >
            <figure>
            <img
              src="https://i.pinimg.com/originals/2a/45/ee/2a45ee65d9f09a4b8281f269731dfad6.png"
              alt="men cloths"
            />
          </figure>
          </Link>
     
        </div>
        <div className="card">
        <Link
            href={{
              pathname: "/products/[catagory]",
              query: { catagory: "Jeanswear" },
            }}
          >
              <figure>
            <img
              src="https://i.pinimg.com/736x/99/20/b5/9920b5e06577d4441e312e625f6f4244.jpg"
              alt="boys cloths"
            />
          </figure>
          </Link>
      
        </div>
        <div className="card">
        <Link
            href={{
              pathname: "/products/[catagory]",
              query: { catagory: "Outwear" },
            }}
          >
           <figure>
            <img
              src="https://i.pinimg.com/originals/54/f4/74/54f4745fb7d50fa96a8e95717166d43a.jpg"
              alt="girl cloths"
            />
          </figure>
          </Link>
       
        </div>
        <div className="card">
        <Link
            href={{
              pathname: "/products/[catagory]",
              query: { catagory: "Knitwear" },
            }}
          >
           <figure>
              <img
                src="https://d32l0g4l8zvs8u.cloudfront.net/media/catalog/product/a/1/a191403_womens_merino_wool_irish_sweater.jpg"
                alt="women sweater"
              />
            </figure>
          </Link>
        
          
        </div>
        <div className="card">
          <Link
            href={{
              pathname: "/products/[catagory]",
              query: { catagory: "Sweater" },
            }}
          >
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxysKQxIGQ_0G1eJwa1TCq0Aq_E6N-Y55osaLshsvLm0XwaV4_AlUygN99_4A1xmoM3A&usqp=CAU"
                alt="men sweater"
              />
            </figure>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
