import React from 'react'
import LoginForm from './components/login-form'
function LoginPage() {
  return (
    <>
    <div className='flex h-screen'>
            <div className='basis-1/2 border-r-4 border-black flex items-center justify-center w-full '>
                    <LoginForm />
            </div>
            <div className='basis-1/2'>Image section</div>
    </div>
    </>
  )
}

export default LoginPage