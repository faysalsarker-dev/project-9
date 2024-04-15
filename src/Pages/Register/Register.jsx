import { useContext, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

import { ContextData } from "../../Contex/Context";
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
const Register = () => {
    const [toggle, setToggle] = useState(true);
    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [charecter, setCharecter] = useState(false)
    const [err, setErr] = useState('')

    const { createUser, profileUpdate, googleLogin, setUser } = useContext(ContextData);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErr('')
        if (!upper && !lower && !charecter) {
           return toast.error("This didn't work.")
        }
        

        createUser(email, password)
        .then(() => {
            profileUpdate(name, photourl)
                .then(updatedUser => {
                    setUser(updatedUser);
                })
               
            e.target.reset(); 
        })
        .catch(error => {
            setErr(error.message); 
        });
};


    const handleGoogleLogin = () => {
        googleLogin()
        .then(res=>{
            console.log(res.user);
        })
    }
    const handleValid = (e) => {
        if (/^(?=.{6,}$).*/.test(e)) {
            setCharecter(true)
        }
        if (! /^(?=.{6,}$).*/.test(e)) {
            setCharecter(false)
        }
        if (/^(?=.*[A-Z])/.test(e)) {
            setUpper(true)
        }
        if (!/^(?=.*[A-Z])/.test(e)) {
            setUpper(false)
        }
        if (/^(?=.*[a-z])/.test(e)) {
            setLower(true)
        }
        if (!/^(?=.*[a-z])/.test(e)) {
            setLower(false)
        }


        
    }


    return (
        <div className='flex justify-center items-center my-5 flex-col '>
            <h3 className="text-4xl my-5 font-bold"  data-aos="fade-left"
    data-aos-duration="1000">Register LuxeHaven</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 " data-aos="fade-left"
    data-aos-duration="1000">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photourl" placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                           {err==='Firebase: Error (auth/email-already-in-use).'?
                            
                            <span className="text-red-500">This email already have on account</span>:<span>{err}</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={(e) => handleValid(e.target.value)} type={`${toggle ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setToggle(!toggle)} className="absolute right-2 top-2/4  p-1">
                                {
                                    toggle ? <HiEyeOff className=" font-semibold text-2xl" /> : <AiFillEye className=" font-semibold text-2xl" />
                                }
                            </div>
                        </div>

                        <div>
                            <p className="mt-2">Password must contain</p>
                            <ul className=" list-disc pl-5 mt-2">

                                <li className={`${charecter ? 'text-green-600' : 'text-red-600'}`}>at least 6 characters</li>
                                <li className={`${upper ? 'text-green-600' : 'text-red-600'}`}>at least one uppercase letter (A-Z)</li>
                                <li className={`${lower ? 'text-green-600' : 'text-red-600'}`}>at least one lowercase letter (a-z)</li>


                            </ul>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#c77dff] text-white font-bold text-xl">Register</button>
                        </div>
                        <p className="my-3">Already have an account? <Link to='/login' className="text-primary link-hover">Login now</Link></p>
                    </form>
                    <div className="divider">or</div>
                    <div className='flex justify-center gap-5'>
                        <button onClick={handleGoogleLogin} ><img className=' w-10' src="https://i.ibb.co/3ShjXGS/google.png" alt="google" border="0" /></button>
                        <button><img className=' w-14' src="https://i.ibb.co/8Nwf9P6/githube.png" alt="githube" border="0" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
