import React from 'react';
import Head from "next/head"
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const WhoWeAre = () => {
    return (
        <div>
            <Head>
                <title>Who We Are</title>
            </Head>
            <Navbar></Navbar>
             <div className="whatwedo">
          <div className="what-we-do">
            <h1 className="text-3xl font-bold">What we do/Who we are</h1>
            <br />
            <p className="mr-10">
              <span className="font-bold">TEXIMCO (BD) LTD</span>. is a first
              growing one of the reputed and well established Export oriented
              Garments Manufacturer, Exporter & Sourcing Company located in the
              famous area at Uttara Model Town, Dhaka, Bangladesh Since 2009.{" "}
              <span className="font-bold">TEXIMCO (BD) LTD</span>. is a
              reregistered Company of Joint Stock Company & Firms, Gov’t
              Republic of Bangladesh. We are a Registered Member of{" "}
              <span className="font-bold">
                “Bangladesh Garments Manufacturer & Exporter Association (BGMEA)
                # AM-1087” & Our Export registration #RA-0148101.
              </span>
              <br />
              <span className="font-bold">
                We have own knit Garments Manufacturing unit in Narayangonj,
                Bscic Area covrering 12 Production Line.
              </span>
              <br />
              Our entire operation is performed by experienced staffs with their
              utmost dedication where customer’s satisfaction is guaranteed.
              With our complete effort and understanding the core concepts of
              this industry we have successfully established ourselves as the
              supplier among a number of companies.
            </p>
          </div>
          <div className="what-we-image">
            <img src="/aboutbg.png" alt="" />
          </div>
        </div>
        <p className="what-do-bottom">
          In order to offer you our best & competive price, all we need to know
          your specifications and purchase quantity. We keep the cost base low
          by offering the most workable selling price. That’s why we are looking
          for Prospective Buyers like you on a long term business relationship
          and for expansion of business to your renowned company. So we would
          like take this opportunity to invitet you to visit us and see our
          facilities in Bangladesh, talk to us of our vision and learn more of
          us through discussion, direct trade and Bank references.
          <br />
          <br />
          <span className="font-bold">The reason behind to choose us as a supplier:</span>
          <br />
           We offer you the best <br />
          competitve prices. <br /> Committed with quality. <br /> Always serve you the best
          delivery date. <br /> Take the load that we can absorb. <br /> TEXIMCO is one of the
          leading fast growing reputed & well established 100% oriented ready
          made Garments Manufacturer, Exporter & sourcing Company From dhaka,
          bangladesh. We are very interested to start business with you & want
          to extend our business in your country. We have capacity to supply you
          all sort of Garments Production from bangladesh with very competitive
          prices, best Quality & on time delivery also. Fashion, promotion! &
          Advertising T-shirt, Polo shirt, Tang top, leggings, Sweatshirt,
          Hoodies, Trouser, Sweater, pullover, Cardigan, vest, jeans pant,
          Shirt, Shorts, cargo pant, Hoody jacket, Outerwear jacket, Windbreaker
          jacket, Work wear dress, Casual shirt, Formal shirt, Chino pant, Hot
          pant Underwear for men’s, Cap, Twoels ladies & Children’s to use local
          and imported fabrics/materials.
        </p>
        <Footer></Footer>
        </div>
    );
};

export default WhoWeAre;