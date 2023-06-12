'use client'
import React,{useState}from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "../../src/components/baseCard/BaseCard";
  import { useRouter } from 'next/navigation';
import Snack from '../Snackbar/Snack';


const Update = ({
    _id:existid,
    slug:existslug,
    title:existtitle,
    author:existauthor,
    img:existimg,
    Feature:existFeature,
    category:existcategory,
    desc:existdesc,
}) => {
     // UPDATE PRODUCT SYSTEM HERE 
     const router = useRouter()
    const [id, setid] = useState(existid||'')
    const [slug, setslug] = useState(existslug||'')
    const [title, settitle] = useState(existtitle||'')
  const [desc, setdesc] = useState(existdesc||'')
  const [author, setauthor] = useState(existauthor||'')
  const [img, setimg] = useState(existimg||'')
  const [category, setcategory] = useState(existcategory||'')
  const [Feature, setFeature] = useState(existFeature||'')
  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
     else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='author'){
        setauthor(e.target.value)
      }
      else if(e.target.name=='img'){
        setimg(e.target.value)
      }
      else if(e.target.name=='Feature'){
        setFeature(e.target.value)
      }
     
  }
 
  
  const submitform = async (e) =>{
    e.preventDefault()
   
       
        if(id!='', slug!='' && title!='' && desc!=''  && category!=''&& author!=''&& img!=''){
        const data = {id,slug,desc,category,img,author,Feature}
        
    let response =  await fetch(`/api/update`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    console.log(a)
    if(a==true){
       router.push('/dashboard/admin/update')
       toast.success('Successfully Blog updated!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       
    }else if(a==false){
      toast.info('You put some wrong info! Try again ', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
  }
  else{
    toast.error('Cannot set empty field', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    
  
  }
  return (
    <>

    <Grid item xs={12} lg={12}>
        <Snack/>
        <BaseCard >
          <Stack spacing={3}>
            
          <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <TextField onChange={handleChange} value={category} type='text' name="category" label="Category" variant="outlined" />
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={author} name="author" type='text' label="Author name " variant="outlined"  />
            <TextField onChange={handleChange} value={img} name="img" type='text' label="Image link " variant="outlined"  />
            <TextField onChange={handleChange} value={Feature} name="Feature" type='text' label="Feature blog " variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Update
          </Button>
          
        </BaseCard>
      </Grid>
      </>
  )
}

export default Update