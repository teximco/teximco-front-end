import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const CompanyProfile = () => {
    return (
        <>
        <Head>
                <title>Company Profile</title>
            </Head>
            <Navbar></Navbar>
            <img className='company-image' src="/company.jpeg" alt="" />
             <h1 className="text-4xl text-center mt-20 mb-5">Company Profile</h1>
        <div className="table">
          <p className="styled-row">Company Name</p>
          <p className="text-3xl styled-row">TEXIMCO (BD) LTD.</p>

          <p>Registered & Corporate office Address</p>
          <p className="">
            House # 72, Road # 15, Sector # 11 <br />
            Uttara Model Town, Dhaka-1230, Bangladesh. <br />
            Email: info@teximcobd.com <br />
            Contact # +88 01818652764, +88 01914682466 (WhatsApp) <br />
          </p>
          <p className="styled-row">Established Year</p>
          <p className="styled-row">2009</p>
          <p>Contact Person</p>
          <p>
            Md. Mijanur Rahman (Managing Director) <br />
            Email: mijan@teximcobd.com
          </p>
          <p className="styled-row">Turnover</p>
          <p className="styled-row">US $ 30 Millions</p>

          <p>Bank Details</p>
          <div className="flex justify-between items-center pr-10 bank">
            <>
              01, 02. NRB Commercial Bank Limited <br />
              AB Bank Limited, Uttara Branch
              <br />
              Uttara Branch
              <br />
              Uttara Model Town Dhaka-1230,
              <br />
              Bangladesh. *<br />
              House # 11, Road #14/D
              <br />
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No;: 4020-789027-000
              <br />
              Swift Number: ABBLBDDH020
              <br />
            </>
            <hr className="table-hr" />
            <>
              01, 02. NRB Commercial Bank Limited <br />
              AB Bank Limited, Uttara Branch
              <br />
              Uttara Branch
              <br />
              Uttara Model Town Dhaka-1230,
              <br />
              Bangladesh. *<br />
              House # 11, Road #14/D
              <br />
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No;: 4020-789027-000
              <br />
              Swift Number: ABBLBDDH020
              <br />
            </>
          </div>
          <p className="styled-row">No. of Employees</p>
          <p className="styled-row">
            15 Persons, <br />
            Merchandising — 04 Persons <br />
            Quality Assurance : 08 Persons <br />
            Commercial: 01 Person <br />
            Accountant: 01 Person <br />
            Office Executive: 01 Person
          </p>
          <p>Products Line</p>
          <p>
            Knit, Sweaters, Woven, Jeans, Sportswear, Activewear, Work wear,
            Terry Towel, Cap-Hats Fashion, Promotional & Advertising Products
            for Men’s, Ladies & Children’s.
          </p>
          <p className="styled-row">Major Export Country</p>
          <p className="styled-row">
            USA, CANADA, POLAND, ITALY, SPAIN, GERMANY, UK, UAE, MEXICO, BRAZIL,
            CHINA, FINLAND.
          </p>
          <p>Mode of Payment</p>
          <p>
            100% Irrevocable / transferable LC at sight, Wire transfer (TT) 30
            days Deferred
          </p>
          <p className="styled-row">Mode of Delivery</p>
          <p className="styled-row">FOB, CNF, CIF.</p>
          <p>Shipment Lead Time</p>
          <p>
            45-90 days for local Fabrics & Accessories, 90-120 days for imported
            fab and accessories.
          </p>
          <p className="styled-row">Nature of Business</p>
          <p className="styled-row">
            100% export oriented- Apparel/Clothing Exporter, Buying and Sourcing
            company
          </p>
          <p>Social Ethics</p>
          <p>
            Our enlisted factories are cerified by BSCI, SEDEX, WRAP, ILO, ISO,
            Oeko-Tex, GOTS, Accord & Alliance.
          </p>
          <p className="styled-row">Website</p>
          <p className="styled-row">
            {" "}
            <Link href="/">http://www.teximcobd.com</Link>
          </p>
        </div>
        <Footer></Footer>
        </>
    );
};

export default CompanyProfile;