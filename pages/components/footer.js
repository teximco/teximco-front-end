import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-24  text-base-content border-t  border-base-300">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 text-base-content ">
  <div className="items-center grid-flow-col">
  <img
                src="/Teximco.png"
                alt=""

              />
    <span>  <h1 className=" text-4xl inline" >TEXIMCO (BD) LTD</h1><br /><p  className="text-xs">Apparel Manufacturer, Expoert, Buying & Sourcing Company</p></span>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;