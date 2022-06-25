import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import DashNav from '../../components/dashNav';

const UpdateMedia = () => {
    const router = useRouter();
    const id = router.query.id;
    const [catagory , setcatagory] = useState('image')
    const [description, setDescription] = useState("");
    const [error , setError] = useState(false)
    const [desError , setDesError] = useState(false)
    const [img , setImg] = useState('')
    const [name , setName] = useState('')
    const [subject , setSubject] = useState('')
    const [videoLink , setVideoLink] = useState('')

    const [medias , setMedias] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/media`)
        .then(res=> res.json())
        .then(data => setMedias(data))
    },[id])
    const find = medias.find(media => media._id == id)
  
    useEffect(()=>{
    
      if(description==''){
        setDesError(true)
      }
  
      else{
        setDesError(false)
      }
  
      if(img?.size > 500000){
        setError(true)
      }
      if(img?.size < 500000){
        setError(false)
      }
   
    })


    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
   
        setDescription(editorRef.current.getContent());
      }
    };
  
    const handleSubmit = async (e) =>{
      e.preventDefault()
  
      const date = new Date().toDateString()
      const videoReporterName = e.target.name.value
      const videoSubject = e.target.subject.value
      
     


      const videoData = ({description , videoReporterName , videoSubject , videoLink , date , catagory})

      const imageData = ({ videoReporterName , videoSubject , catagory })

      console.log(imageData)

      if( img === '' || img === undefined){
        fetch(`http://localhost:5000/media-video/${id}` , {
          method : 'PUT',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(videoData)
        })
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          if (data.modifiedCount) {
            toast(`${name}, You have successfully updated the media`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
  
          e.target.reset();
        });
      }
  
      else{
  
        const formData = new FormData()
        formData.append('img', img)
        formData.append('description', description)
        formData.append('date', date);
    
        await fetch(`http://localhost:5000/media-image/${id}`, {
          method: "PATCH",
          body: formData
        })
          .then((res) => res.json())
        .then((result) => 
        
        {
          console.log(result)
            if (result.modifiedCount){
                fetch(`http://localhost:5000/media-image/${id}`, {
                method: "PUT",
                headers : {
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(imageData)
              }).then(res => res.json()).then(data => {
                console.log(data)
                 if (data.matchedCount) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              })
            }
            e.target.reset();
        })
      }
  
    }
    return (
        <div>
        <div className="drawer drawer-mobile">
   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content bg-gray-100 w-full">
   <DashNav></DashNav>
    <div key={find?._id}  className="container">
      <h1 className='text-4xl text-center mt-6 mb-10'>{find?.name  }</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <p className='font-bold'>Reporter </p>
          <p className='font-bold'>:</p>
          <input name='name' onBlur={(e)=>setName(e.target.value)} type="text" defaultValue={find?.name} placeholder="Full Name" className="input input-bordered input-info w-full max-w-lg" />
        </div>
        <div className="form">
          <p className='font-bold'>Type </p>
          <p className='font-bold'>:</p>
          <select  type="text" placeholder="Full Name" onChange={(e)=> setcatagory(e.target.value)} className="input input-bordered input-info w-full h-10 max-w-lg mt-5">
          <option value="image">Image</option>
          <option value="video">Video</option>
          </select>
        </div>
     
        {
          catagory == 'image' ?     <div className="form">
          <p className='font-bold'>Image </p>
          <p className='font-bold'>:</p>
      
          <div className="form-file">
     
      <input
        className="file input-bordered input-info w-full max-w-lg m-4"
        name="image"
      onChange={(e) => setImg(e.target.files[0])}
        placeholder="select"
        type="file"
        id=""
      />

    </div>
     
        </div> :   <div className="form mt-5">
          <p className='font-bold'>Embeded Link </p>
          <p className='font-bold'>:</p>
          <input defaultValue={find?.videoLink} type="text" name='videoLink' onBlur={(e)=>setVideoLink(e.target.value)} placeholder="Embeded video link" className="input input-bordered input-info w-full max-w-lg" />
        </div>
        }
      {
          error && <small className='text-center block text-red-600'>file size cannot be more than 500kb</small>
        }
     
      


        <div className="form">
          <p className='font-bold'>Subject </p>
          <p className='font-bold'>:</p>
          <textarea name='subject' onBlur={(e)=>setSubject(e.target.value)}  type="text" defaultValue={find?.subject} className="input input-bordered input-info w-full h-20 max-w-lg mt-5" />
        </div>
        {
          desError && <small className='text-center block text-red-600'>Description must have to changed</small>
        }
        <div className="form">
          <p className='font-bold'>Description </p>
          <p className='font-bold'>:</p>
          <Editor
              onChange={log}
              apiKey="lux3g93dx5gxawltm3ptyg2r21e35usqhz5xe3judz0yao85"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={find?.description}
              
              init={{
                height: 250,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "insertfile image media pageembed template link anchor codesample | bold italic forecolor | alignleft aligncenter " +
                  "undo redo | blocks | " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                image_caption: true,
                image_advtab: true,
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ;  }",
                  relative_urls: true,
              }}
            />
        </div>
        <button disabled={error || desError}   type="submit" className="shop-button3 block  m-auto mt-5">Submit</button>
      </form>
    </div>

   </div>

   <div className="drawer-side  fixed h-full">
     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
     <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
         <img className='dashLogo' src="/dashLogo.png" alt="" />
         <div className="divider"></div> 
     <label className="sideNav">
       {" "}
       <Link href="/dashboard">Dashboard</Link>
     </label>

     <label htmlFor="touch2">
       <span className="span">Product</span>
     </label>

     <input type="checkbox" id="touch2" />
     <ul className="slide2">
       <li>
         {" "}
         <Link href="/dashboard/add-product">Add Product</Link>{" "}
       </li>
       <li>
         {" "}
         <Link href="/dashboard/product-list">Product List</Link>
       </li>
     </ul>

     <label htmlFor="touch">
       <span className="span">Media</span>
     </label>
     <input type="checkbox" id="touch" />
     <ul className="drop">
       <li>
         {" "}
         <Link href="/dashboard/add-media">Add Media</Link>
       </li>
       <li>
         <Link href="/dashboard/media-list">Media List</Link>
       </li>
     </ul>
     <label className="sideNav">
       {" "}
       <Link href="/dashboard/email">Email</Link>
     </label>
   </ul>
   </div>
 </div>
 </div>
    );
};

export default UpdateMedia;