"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from 'axios'
import { useRouter } from "next/router";

const Login = () => {
  // const router=useRouter()
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
    // if(res.status==201){
    //    router.push('/admin')
    //  }
  })
 }

  return (
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
  );
};

export default Login;
