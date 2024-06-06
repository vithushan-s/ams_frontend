import React from 'react'

function Login() {
  return (
    <>
      <section className='w-full h-screen bg-gray-300 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-xl font-bold'>EUSL Attendance Management System</h1>
          <div className='w-1/2 h-3/4 bg-white rounded-xl flex items-center p-3'>
              <div className='w-1/2 h-full bg-blue-950 rounded-xl flex flex-col items-center justify-center gap-2'>
                <h1 className='text-xl font-medium text-white'>Welcome to AMS</h1>
                <img src="login.svg" alt="" width={250}/>
                <p className='text-center text-xs p-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis doloremque autem voluptate iure incidunt exercitationem minima obcaecati</p>
              </div>

              <div className='w-1/2 px-5 flex flex-col gap-3'>
                <h1 className='text-center text-2xl font-semibold border-b py-2'>Login</h1>
                <form action="#" className='flex flex-col gap-3'>
                    <input type="text" id='username' className='txt-primary' placeholder='Username' />
                    <input type="password" id='password' className='txt-primary' placeholder='password'/>
                    <button className='btn-primary'>Login</button>
                </form>
              </div>
          </div>
      </section>
    </>
  )
}

export default Login