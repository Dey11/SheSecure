import React from 'react'
import LoginLanding from './components/LoginLanding'
import LoginForm from './components/LoginForm'

const Login = () => {
  return (
    <div>
         <div className="flex items-center justify-center">
      
      <div className="w-[50%]  ">
        <LoginForm />
      </div>
      <div className="w-[50%] ">
        <LoginLanding />
      </div>
    </div>
      
    </div>
  )
}

export default Login
