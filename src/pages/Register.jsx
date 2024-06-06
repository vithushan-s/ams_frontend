import React from 'react'

function Register() {
  return (
    <>
        <section className='w-full h-screen bg-gray-200 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-xl font-bold'>EUSL Attendance Management System</h1>
          <div className='w-1/2 h-3/4 bg-white rounded-xl flex items-center p-3'>
              <div className='w-1/2 h-full bg-blue-950 rounded-xl flex flex-col items-center justify-center gap-2'>
                <h1 className='text-xl font-medium text-white'>Welcome to AMS</h1>
                <img src="login.svg" alt="" width={250}/>
                <p className='text-center text-xs p-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis doloremque autem voluptate iure incidunt exercitationem minima obcaecati</p>
              </div>

              <div className='w-1/2 px-5 flex flex-col gap-3'>
                <h1 className='text-center text-2xl font-semibold border-b py-2'>Create Account</h1>
                <form action="#" className='flex flex-col gap-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' className='txt-primary'/>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' className='txt-primary'/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className='txt-primary'/>
                    <button className='btn-primary'>SIGNUP</button>
                </form>
              </div>
          </div>
      </section>
    </>
  )
}

export default Register