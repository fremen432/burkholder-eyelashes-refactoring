import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutation';

// import Auth from '../utils/auth';

import { LockClosedIcon } from '@heroicons/react/solid'

const formInputStyles = `appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`
const formSubmitBtnStyles = `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`

export default function Login__COMP(props) {
    const { page, setPageMethods } = props;

    const handleClickHere = () => setPageMethods.signUp();

  // keeps track of when the username, email and password is updated
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  // this comes from @apollo/client node module
//   const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    // whenever the event is changed, we're taking the 'name' property from the input in the form and it's corresponding value.
    const { name, value } = event.target;
    // once we've 'targeted' the property that's been changed, we update the form state with the new value
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // ---- SUBMIT FORM ----
  const handleFormSubmit = async (event) => {
      console.log(event)
    // event.preventDefault();

    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });
    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }
  };
  

  return (
    <>
      <div id='Login' className="COMPONENT__Login ">
        <div className="max-w-md w-full space-y-8">
        <h4 className="card-header">Log In</h4>

            {/* Logo */}
            {/* <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            /> */}

          {/* New Sign In form */}
            <form className=" rounded-md shadow-sm space-y-px mt-8 space-y-6" action="#" onSubmit={handleFormSubmit} >  
              <input
                className={formInputStyles}
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className={formInputStyles} 
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className={formSubmitBtnStyles} type="submit">
                Submit
              </button>
          </form>              
          <p className=" text-sm " >Don't have an account? Click <a className="signUpHere" href='#SignUp' onClick={handleClickHere} >here</a> to sign up.</p>

        </div>
      </div>
    </>
  )
}