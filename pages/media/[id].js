import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ReactHtmlParser from 'react-html-parser';

const MediaDetails = () => {
    const router = useRouter();
    const id = router.query.id;

    const [medias , setMedias] = useState([])

    useEffect(()=>{
        fetch(`https://infinite-spire-29292.herokuapp.com/media`)
        .then(res=> res.json())
        .then(data => setMedias(data))
    },[])
    
    const find = medias.find(media => media._id == id)
 

  
    return (
        <div>
            <Head>
                <title>Media Details</title>
            </Head>
            <Navbar></Navbar>
            <div><div className='media-container'>
                <div className="media-subject">
                    <h1 className='text-2xl text-gray-400'>Name : {find?.name} </h1>
                    <h1 className='uppercase  text-6xl media-title font-bold'>{find?.subject}</h1>
                </div>
                <div className="media-image">


                    {
                        find?.catagory == 'image' && <img src={`data:image/png;base64,${find?.image}`} alt="" />  
                    }
                    {
                        find?.catagory == 'video' && <iframe width="660" height="415" src={find?.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                   


                </div>
            </div>
            <div className="media-content pt-10 ml-12">
                <h1>Date : {find?.date} <span className='bg-gray-200 p-1'>{find?.name}  </span></h1>
                <br />
                <span>{ReactHtmlParser(find?.description)}</span>
            </div></div>
            
        </div>
    );
};

export default MediaDetails;