'use client'
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation';
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
import axios from 'axios';
import Snack from '@/components/Snackbar/Snack';




const del = () => {
  const router=useRouter()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/dashboard')
    }
  },[])
  
 const [slug,setslug]=useState('')
  const handleChange = async  (e) =>{
     
     if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      
     
  }
 
  
// {DEL function }------------------------
  const DELETE = async (e) =>{
        e.preventDefault()
        if(slug!=''){
          const data = {slug}
          const res = await axios.post('/api/delete',data)
           if(res.data==true){
                  toast.success('Successfully deleted!', {
                   position: "bottom-center",
                   autoClose: 2000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   });
                   setslug('')
                   
                  
               }
               else if(res.data==false){
                 toast.error('There is no blog with this slug ', {
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
      
    
  
  }


  
    return (
      
      <ThemeProvider theme={theme}>
         <Snack/>
       <FullLayout>
        {/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only z-wear admins allow here</h1>} */}
       

       <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>DELETE BLOG BY SLUG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={DELETE} variant="outlined" mt={2}>
            DELETE
          </Button>
        </BaseCard>
      </Grid>

     
    
  
        </FullLayout>
        </ThemeProvider>
      );
}

export default del