import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/navbar';

const Media = () => {
    const [medias , setMedias] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch("http://localhost:5000/media")
        .then(res=> res.json())
        .then(data => {
            setMedias(data)
            setIsLoading(false)
        })
    },[])
    
  
    return (
        <div>
            <Head>
                <title>Media</title>
            </Head>
            <Navbar></Navbar>
        {
            isLoading ? 'loading' :           <div>
            <h1 className='text-5xl text-center mt-12'>Media</h1>
            <div className="media">
                {
                    medias.map(media =>  <div key={media._id} className="media-cards m-auto p-2 mt-10">
                 
                 {
                        media?.catagory == 'image' && <img src={`data:image/png;base64,${media?.image}`} alt="" />  
                    }
                    {
                        media?.catagory == 'video' && <iframe width="330" height="250" src={media?.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }  
                    {/* <img className="blog-img" src={`data:image/png;base64,${blog.img}`}  alt="" /> */}
                    <br />
                    <hr />

                    <h4 className='text-lg'>Name : {media.name} </h4>
                    <small>Date : 21/08/2022  </small>
                    <br />
                    <span className='text-2xl'>Subject : {media.subject.slice(0,20)}</span>
                      <br />
                    <button className="mt-5 block m-auto media-button">
                    <Link
                        href={{
                            pathname: "/media/[id]",

                            query: { id: media._id },
                        }}
                        >
                        Details
                        </Link>
                    </button>
                </div> )
                }
               
         </div>

            </div>
        }
        </div>
    );
};

export default Media;