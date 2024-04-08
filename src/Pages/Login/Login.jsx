import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";



const Login = () => {
const [toggle,setToggle] = useState(true)


    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);


    }

    return (
        <div className='flex justify-center items-center my-5 flex-col'>
            <h3 className="text-4xl my-5 font-bold">Login LuxeHaven</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label ">
                                <span className="label-text">Password</span>
                            </label>
                            
                            <input type={`${toggle?'password':'text'}`} name="password" placeholder="password" className="input input-bordered " required  />


                            <div  onClick={()=>setToggle(!toggle)} className=" absolute right-2 top-2/4  p-1">
                            {
                                toggle?<HiEyeOff className=" font-semibold text-2xl" />:<AiFillEye className=" font-semibold text-2xl" />
                            }
                            </div>

                          
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-xl">Login</button>
                        </div>
                        <p className="my-3
                        ">New hare <Link to='/register' className="text-primary link-hover">Register now</Link></p>
                    </form>
                    <div className="divider">or</div>
                    <div className='flex justify-center gap-5'>
                    <button><img className=' w-10' src="https://i.ibb.co/3ShjXGS/google.png" alt="google" border="0" /></button>
                    <button><img  className=' w-14' src="https://i.ibb.co/8Nwf9P6/githube.png" alt="githube" border="0" /></button>
                   
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;