'use client'
import React,{useEffect} from 'react'
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
import Snack from '@/components/Snackbar/Snack';

import axios from 'axios';







const add = () => {
  const router=useRouter()
  const [slug, setslug] = useState('')
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [Feature, setFeature] = useState('')
  const [img, setimg] = useState('')
  const [author, setauthor] = useState('')
  const [date, setdate] = useState('')
  const [month, setmonth] = useState('')
  const [img2, setimg2] = useState('')
  const [desc2, setdesc2] = useState('')

 
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/dashboard')
    }
  },[])

  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
      else if(e.target.name=='img'){
        setimg(e.target.value)
      }
      else if(e.target.name=='Feature'){
        setFeature(e.target.value)
      }
      else if(e.target.name=='author'){
        setauthor(e.target.value)
      }
      else if(e.target.name=='date'){
        setdate(e.target.value)
      }
      else if(e.target.name=='month'){
        setmonth(e.target.value)
      }
      else if(e.target.name=='img2'){
        setimg2(e.target.value)
      }
      else if(e.target.name=='desc2'){
        setdesc2(e.target.value)
      }

      
     
  }
  const submitform = async (e) =>{
    e.preventDefault()
        if( slug!='' && title!='' && desc!='' && category!=''&& author!='',date!='',img!=''  && Feature!='' && month!=''){
        const data = {slug,title,img,desc,category,Feature,author,date,month,img2,desc2}
    let a = await axios.post('/api/blog',data)
    console.log(a)
    if(a.status==201){
       toast.success('Successfully Blog Post!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
       
    }else if(a.status==500){
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
        <Snack/>
      <ThemeProvider theme={theme}>
         
       <FullLayout>
        {/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only z-wear admins allow here</h1>} */}
          {/* <Grid container spacing={0}> */}
        <h1 className='text-3xl font-bold text-pink-500 text-center' >POST BLOG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
            <TextField onChange={handleChange} value={slug} className='w-full'  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <TextField onChange={handleChange} value={category} type='text' name="category" label="Category" variant="outlined" />
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={img} name="img" type='text' label="Image link " variant="outlined"  />
            <TextField onChange={handleChange} value={desc2} name="desc2" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={author} name="author" type='text' label="Author name " variant="outlined"  />
            <TextField onChange={handleChange} value={img2} name="img2" type='text' label="2nd Image link " variant="outlined"  />
            <TextField onChange={handleChange} value={date} name="date" type='date' label="" variant="outlined"  />
            
            <select value={month} onChange={handleChange} name='month'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                  <option value={''}>Month</option>
                   <option value={'January'}>January</option>
                   <option value={'Feburary'}>Feburary</option>
                   <option value={'March'}>March</option>
                   <option value={'April'}>April</option>
                   <option value={'May'}>May</option>
                   <option value={'June'}>June</option>
                   <option value={'July'}>July</option>
                   <option value={'August'}>August</option>
                   <option value={'September'}>September</option>
                   <option value={'October'}>October</option>
                   <option value={'November'}>November</option>
                   <option value={'December'}>December</option>
            </select>
            <select value={Feature} onChange={handleChange} name='Feature'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                  <option value={''}>Feature</option>
                   <option value={'Yes'}>Yes</option>
                   <option value={'NO'}>No</option>
            </select>
            {/* <ReactQuill 
            modules={modules}
            formats={formats}
            theme="snow" value={desc}  onChange={setdesc}
            className='h'
            ></ReactQuill> */}
            
          
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Post
          </Button>
          
        </BaseCard>
      </Grid>

      
     

     
    
  
        </FullLayout>
        </ThemeProvider>
        </>
      );
}

export default add