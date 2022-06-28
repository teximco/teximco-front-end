import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

const HomeMedia = () => {
  


    return (
        <div className='homemedia-container mt-40'>
            <div className="homemedia-content">
                <h1 className='text-5xl text-gray-400'>This is Media section</h1>
                <br />
                <h1 className='text-6xl font-bold'>This is Media section will never
                        again let you worry
                        about your plants
                </h1>
               
            
                 <br />
                <br />
                <button className="shop-button2"> <Link href="/media">Find Out Now</Link> </button>
            </div>
            <div className="homemedia-image">
                <img className='rounded-full' src="https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWF0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            </div>
        </div>
    );
};

export default HomeMedia;