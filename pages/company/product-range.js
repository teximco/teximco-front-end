import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Head from "next/head"
import 'react-vertical-timeline-component/style.min.css';

const ProductRange = () => {
    return (
        <div>
            <Head>
            <title>Our Product Range</title>
            </Head>
            <Navbar></Navbar>
            <img className="product-range" src="/product-range.jpeg" alt="" />
            <p className='container pt-16'>
            Circular Knit: T-shirt, Polo shirt, Tang top, Nightwear, Sports wear, Security wear, Vest, Fleece Jacket,
            Hooded Jacket, Leggings, Underwear, Made of Local & Imported fabrics for Men’s, Women’s & Children’s.
            <br />
            Sweater, Pullover, Cardigan & Vest: (3, 5, 7, 10 & 12 Gauge) Made of: <br />
            <br />
            Acrylic, Cotton, Acrylic/Cotton, Acrylic/Wool, Cotton Like, Acrylic Cashmere like, Acrylic Mohair Like/Tamu, 
            Cotton/Nylon, Acrylic/Nylon, Acrylic Bright, Chenille, Tube, Tape & few more basic blended Local & 
            <br />
            Imported yarns for Men’s, Ladies, Boy’s, Girls & Kids. <br />
            <br />
            ee Woven, Denim & Non-Denim: Jeans Pant, Jacket (Basic/Fancy), Trouser, Chino, shorts, Cargo Pants,
            Shirt (Casual & Formal), Tailored pant, Blazer, Men’s, Ladies, Boy’s, Girls & Kids Top-bottom made of: Local 
            & Imported denim & non-denim fabric. <br />
            <br />
            We are providing professional guidance in out-sourcing of ready-made garment production in the most 
            competitive markets in Asia. We have more than 25 out sourcing factories incl. (knit, woven, sweaters and
            outerwear) in Bangladesh, which is absolutely high profile factories at around. To ensure customer 
            satisfaction, we work on followed from the time of developing samples until the ready-made garment is  
            loaded into the container.
            </p>
            <Footer></Footer>
        </div>
    );
};

export default ProductRange;