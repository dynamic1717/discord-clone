import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container h-full flex justify-center items-center'>
      {children}
    </div>
  )
}

export default AuthLayout
