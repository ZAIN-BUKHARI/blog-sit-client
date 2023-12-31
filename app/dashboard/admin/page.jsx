'use client'
import { Grid, ThemeProvider } from "@mui/material";
import BlogCard from "../../../src/components/dashboard/BlogCard";
import SalesOverview from "../../../src/components/dashboard/SalesOverview";
// import DailyActivity from "../../../src/components/dashboard/DailyActivity";
// import ProductPerfomance from "../../../src/components/dashboard/ProductPerfomance";
import FullLayout from "../../../src/layouts/FullLayout";
import theme from "../../../src/theme/theme";
import React,{useEffect} from 'react'
// import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';




export default function Index() {
  // const router =useRouter()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      // router.push('/dashboard')
    }
  },[])

  return (
    
    <ThemeProvider theme={theme}>
    {/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only z-wear admins allow here</h1>} */}
    <FullLayout>
    {/* <Grid container spacing={0}> */}
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        {/* <DailyActivity /> */}
      </Grid>
      {/* <Grid item xs={12} lg={8}>
        <ProductPerfomance admin={admin} />
      </Grid> */}
    {/* </Grid> */}
    </FullLayout>
    
    </ThemeProvider>
    
  );
}
