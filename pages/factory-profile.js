import Head from "next/head";
import React from "react";
import Navbar from "./components/navbar";

const FactoryProfile = () => {
  return (
    <div>
      <Head>
        <title>Factory Profile</title>
      </Head>
      <Navbar></Navbar>
      <div>
        <h1 className="text-2xl mt-10 mb-10 ml-10">Our key Vendor/Partners</h1>
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot_7.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">Tara Tex Fashion</h1>
            <p>
              Yearly Turn Over USD 22 0 Million <br />
              Product Category: Knit’s Garments
              <br />
              Production Capacity: 2.5 Million
              <br />
              Number of Machines- 1,350 Pcs
              <br />
              Manpower: 3,000 Person
              <br />
              Complinace Certificats: Accord, BSCI, WRAP, SEDEX
            </p>
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Devor Sweater</h1>
            <p>
              Yearly Turn Over USD 20 Million <br />
              Product Category: Sweater, Pullover,Vest Etc. <br />
              Production Capacity: 10,00 00 | Per month <br />
              Number of Machines- 450 Pcs <br />
              Manpower: 600 Person <br />
              Complinace Certificats: ILO, BSC, WRAP,SEDEX <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot8.png" alt="" />
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot_1.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">KAC Fashion Ltd.</h1>
            <p>
              Yearly Turn Over USD 22 5 Million <br />
              Product Category: Knit’s Garments <br />
              Production Capacity: 1.5 Millions <br />
              Number of Machines- 750 Pcs <br />
              Manpower:3000Person <br />
              Complinace Certificats: Accord, BSCI, WRAP,SEDEX <br />
            </p>
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Uttara Knit Wear</h1>
            <p>
              Yearly Turn Over USD 60 Million®l <br />
              Product Category: Knit 3 Woven
              <br />
              Production Capacity: 1.5 Millions Pcs
              <br />
              Number of Machines- 1050 Pcs
              <br />
              Manpower: 1,050 Person
              <br />
              Complinace Certificats: Accord, BSCI, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot_2.png" alt="" />
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot5.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">MT Sweater Ltd.</h1>
            <p>
              Yearly Turn Over USD: 30 Million <br />
              Product Category: Sweater, Pullover, Cardigan
              <br />
              Production Capacity: 4,00,000 Pcs
              <br />
              Number of Machines- 950 Pcs
              <br />
              Manpower: 2,500 Person
              <br />
              Complinace Certificats: BSCI, WRAP,SEDEX, ISO, RSC
              <br />
            </p>
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold"> Automation Knit Wear Ltd.</h1>
            <p>
              Yearly Turn Over USD 20 Million <br />
              Product Category: Knit’s Garments
              <br />
              Production Line: 12
              <br />
              Number of Machines- 750 Pcs
              <br />
              Manpower: 550 Person
              <br />
              Complinace Certificats: Accord, BSC, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot6.png" alt="" />
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot7.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">Mostafa Garments</h1>
            <p>
              Yearly Turn Over USD 2,5 Millions <br />
              Product Category: Jacket, Trouser, Shorts etc.
              <br />
              Production Capacity: 2,00,000 per month
              <br />
              Number of Machines- 550 Pcs
              <br />
              Manpower: 500 Person
              <br />
              Complinace Certificats: ILO, BSCI, WRAP,SEDEX
              <br />
            </p>
          </div>
        </div>
        <hr className="m-10" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Target Denim & Casual Wear</h1>
            <p>
              Yearly Turn Over USC 90 Millions <br />
              Product Category: Jeans, Trouser, Jacket etc
              <br />
              Production Line: 30
              <br />
              Number of Machines- 800 Pcs
              <br />
              Manpower: 4000 Person
              <br />
              Complinace Certificats: Accord, BSC, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryProfile;
