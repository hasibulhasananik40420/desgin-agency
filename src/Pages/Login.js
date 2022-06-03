import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from './Loading';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate() 
  const location = useLocation() 
  let from = location.state?.from?.pathname || '/'
 
  const onSubmit=(data)=>{
      console.log(data);
      signInWithEmailAndPassword(data.email , data.password )
  }

  if(loading || GoogleLoading){
    return <Loading></Loading>
  }

   let errorMessage ;
   if(error|| GoogleError){
     errorMessage = <p className='text-red-500 font-serif'>{error?.message} || {GoogleError.message}</p>
   }

   if(user|| GoogleUser){
    navigate(from , {replace: true})
  }


    return (
        <div>
            <section class="h-full gradient-form  md:h-screen">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">We are The Creative Agency</h4>
                </div>
                
                  <p class="mb-4">Please login to your account</p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="mb-4">
                     
                     <input    {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                       type="email"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="exampleFormControlInput1"
                       placeholder="Username/Email"
                     />
                      <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                            </label>
                   </div>
                   <div class="mb-4">
                     <input   {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                       type="password"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="exampleFormControlInput1"
                       placeholder="Password"
                     />
                       <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

                            </label>
                   </div>

                 
                  
                  <div class="text-center pt-1  pb-1">
                    <button
                      class=" mycolor inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                     
                      

                    >
                      Log in
                    </button>
                   
                  </div>
                  </form>
                  {errorMessage}
                  <div class="divider">OR</div>
                
                  <button   onClick={() => signInWithGoogle()}
                      class=" mycolor inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                     
                      

                    >
                      Continue With Google
                    </button>

                  <a class="text-gray-500" href="#!">Forgot password?</a>

                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <Link to='/singup'
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                     Singup
                    </Link>
                  </div>
               
              </div>
            </div>
            <div
              class="myside lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              
            >
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Login;