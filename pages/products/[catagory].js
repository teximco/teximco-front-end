import React, { useEffect } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useState , useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Head from 'next/head'


const Catagory = ({title = " " }) => {
    const router = useRouter();
    const catagory = router.query.catagory;

    const [photo , setPhoto] = useState([])
    useEffect(()=>{
            fetch('../catagory.json')
            .then(res => res.json())
            .then(data => setPhoto(data))
    },[])
  
    const photoByCatagory = photo.filter(photo => photo.catagory == catagory)



    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };


    return (
        <div>
          <Head>
            <title>{catagory}</title>
          </Head>
          <Navbar></Navbar>
        <h1 className='text-center text-6xl'>{catagory}</h1>
    <Gallery photos={photoByCatagory} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photoByCatagory.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
        </div>
    );
};

export default Catagory;