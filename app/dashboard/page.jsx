"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from 'axios'
import { useRouter } from "next/navigation";
import Snack from "@/components/Snackbar/Snack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const router=useRouter()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/dashboard/admin')
      toast.success('Already logged in', {
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
  },[])
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const handleChange =(e)=>{
   if(e.target.name=='password'){
    setPassword(e.target.value)
   }
   else if(e.target.name=='email'){
    setEmail(e.target.value)
   }
 }
 const submit =async(e)=>{
  e.preventDefault()
  const data={email,password}
  axios.post('/api/login',data).then((res)=>{
    console.log(res)
    if(res.status==201){
      toast.success('Successfully Admin log in !', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       router.push('/dashboard/admin')
       localStorage.setItem('token',res.data)

     }
  })
 }

  return (
    <>
    
      <Snack/>
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form  className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
          value={email}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
          className={styles.input}
        />
        <button onClick={submit} className={styles.button}>Login</button>
      </form>
    
     
    </div>
    </>
  );
};

export default Login;
