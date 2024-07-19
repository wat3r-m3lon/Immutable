import React, {useRef, useState} from 'react';
import usePageTitle from '../../src/hooks/usePageTitle';
import {Link, useNavigate} from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Footer from "../partials/Footer";
import useMessage from 'antd/es/message/useMessage';


const requiredAccount = (value) => {
  if (!value) {
    return (
        <div className="invalid-feedback d-block">
          Email is required!
        </div>
    );
  }
};


function SignIn() {
  usePageTitle("Sign In");

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [wrongpsd, setWrongpsd] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = useMessage();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
          () => {
            setWrongpsd(false);
            navigate("/profile");
            window.location.reload();
          },
          (error) => {
            messageApi.open({
              type: 'error',
              content: 'Sorry, Unable to log in with provided credentials.',
            });
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            setWrongpsd(true);
            setLoading(false);
            setMessage(resMessage);
          }
      );
    } else {
      setLoading(false);
    }
  }


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* This contextHolder is the placeholder to display the information of log in failure */}
      {contextHolder} 
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-44 sm:px-6">
          {/* pt-16 pb-12 md:pt-20 md:pb-20 */}
            <div className="mt-16 md:mt-16 md:mb-10">
            
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-16 md:pb-16">
                <h1 className="h1">Manage your verified credentials with NFT 2.0</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto mt-0 ">

                {/* Once the log in fails, show this information */}
                {wrongpsd && <p className='text-red-500 md-0 text-lg'> Unable to log in with provided credentials. </p>}
                
                {/* The form of login  */}
                <Form onSubmit={handleLogin} ref={form}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input className="form-input w-full text-gray-700 form-control fadeIn second" 
                             placeholder="Please Enter the User Name" 
                             required
                             type="text"
                             name="email"
                             value={email}
                             onChange={onChangeEmail}
                             validations={[requiredAccount]}/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password"
                             type="password"
                             className="form-input w-full text-gray-700" 
                             placeholder="Password (at least 10 characters)"
                             required
                             name="password"
                             value={password}
                             onChange={onChangePassword}
                             validations={[requiredAccount]}/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Keep me signed in</span>
                        </label>
                        <Link to="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  {/*reset password*/}

                  {/* The login button */}
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"/>
                        )}
                        <span>Login</span>
                      </button>
                      {/*<button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>*/}
                    </div>
                  </div> 
                  
                  {/* Below is the message from back-end server */}
                  {/* {message && (
                      <div className="form-group fadeIn fifth">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                  )} */}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>

                <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                </div>

                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"/>
                  <div className="text-gray-400">Or sign in with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"/>
                </div>

                {/* The "Sign in with Google button" */}
                <form className="">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-green-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"/>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* <div className="text-gray-400 text-center mt-6">
                  Adamin Login <Link to="/admin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Admin login</Link>
                </div> */}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer/>

    </div>

  );
}

export default SignIn;