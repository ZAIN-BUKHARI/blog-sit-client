import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Snack = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
  )
}

export default Snack