import { useContext, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ContextData } from "../../Contex/Context";

const Register = () => {
    const [toggle, setToggle] = useState(true);

    const { createUser, profileUpdate ,googleLogin} = useContext(ContextData);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(res => {
                profileUpdate(name, photourl)
                console.log(res.user);
            })
            .catch(error => {
                console.error("Error registering:", error.message);
            });
    };



    const handleGoogleLogin=()=>{
        googleLogin()
    }


    return (
        <div className='flex justify-center items-center my-5 flex-col'>
            <h3 className="text-4xl my-5 font-bold">Register LuxeHaven</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
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
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={`${toggle ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setToggle(!toggle)} className="absolute right-2 top-2/4  p-1">
                                {
                                    toggle ? <HiEyeOff className=" font-semibold text-2xl" /> : <AiFillEye className=" font-semibold text-2xl" />
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-xl">Register</button>
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
