import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Link, useNavigate } from "react-router-dom";



function EmpLogin() {
  return (
    <>
    
    
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Sign Up</h1>
          <form>
            <div className='mb-2'>
              <label htmlFor='name'>Name</label>
              <input type="text" name='name' className='form-control'placeholder='Enter your Name'/>


            </div>
            <br></br>
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input type="text" name='email' className='form-control'placeholder='Enter your age'/>
              

            </div>
            <br></br>
            <div className='mb-2'>
              <label htmlFor='password'>Set new Password</label>
              <input type="text" name='newpassword' className='form-control'placeholder='Enter your new password'/>
              

            </div>
            <br></br>
            <div className='mb-2'>
              <label htmlFor='password'>Confirm Password</label>
              <input type="text" name='confirmpassword' className='form-control'placeholder='Confirm your password'/>
              

            </div>
            <br></br>
            
            <Link to="employee/listing"className='btn btn-primary'>Create an Account</Link>

          </form>

        </div>

      </div>
      


    
    </>
  )
}

export default EmpLogin;