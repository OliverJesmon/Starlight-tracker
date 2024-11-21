import React from 'react';
import Header from '../components/Header';

function Login() {
    return (
        <>
        <div className='form-signin mt-4 mb-3 position-static'>
            <div className='container-lg-primary'>

            <h3 className='h3-light mb-3 fw-normal'>Please Sign-in</h3>
            <div className='form-floating'>
                <input className='form-control-lg mt-3' type='email' placeholder='name@example.com' />
                

            </div>
            <div className='form-floating'>
                <input className='form-control-lg mt-3' type='Password' placeholder='Password' />
            </div>
            <button className="w-40 btn btn-lg btn-success position-static mt-3" type="submit">Sign in</button>
          </div>
          </div>

        </>
    );
}

export default Login;