'use client'
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
// import Center from '../components/Center'
import axios from 'axios';
import Update from '../../../../components/update/Update'


import React,{useEffect} from 'react'
import { useRouter } from "next/navigation";



const update = (admin) => {
  const router = useRouter()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/dashboard')
    }
  },[])
    const [slug,setslug]=useState('')
    const [product,setproduct]=useState([])
    const find=(e)=>{
      if(e.target.name=='search'){
        setslug(e.target.value)
      }
    }
    const Search=async(e)=>{
     e.preventDefault()
     axios.post('/api/searchslug',{slug}).then(res=>{
        console.log(res.data[0])
        setproduct(res.data[0])
     })
    }


  return (
    <>
    <ThemeProvider theme={theme}>
    

{/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only z-wear admins allow here</h1>} */}
 <FullLayout>
    
    <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>UPDATE BLOG BY SLUG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={find} value={slug} type='text'  name="search" label="Search" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={Search} variant="outlined" mt={2}>
            Update
          </Button>


        </BaseCard>
      </Grid>
      {/* {product.length==0  && <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>SEARCH PRODUCT BY SLUG AN UPDATE</h1>} */}
      {product.length!=0 && 
     
    //  <Center>
         <Update {...product} />
    }     

     

    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default update