"use client";

import { createContext, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [animation,setAnimation]=useState('')
    useEffect(()=>{
      AOS.init()
      let mq = window.matchMedia("(max-width: 768px)");
      console.log(mq)
      if (mq.matches==true) {
        setAnimation(false)
      } else {
        setAnimation(true)
      }
    },[])
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

// value={{ toggle, mode }}
  return (
    <ThemeContext.Provider value={{animation,mode,toggle}}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
