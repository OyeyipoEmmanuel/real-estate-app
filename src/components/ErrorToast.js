import React from 'react'
import { ToastContainer, toast } from 'react-toast'

const ErrorToast = (props) => {

    toast.error(props.errorMessage)

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
  )
}

export default ErrorToast