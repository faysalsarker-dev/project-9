import { useContext, useState } from "react";
import { ContextData } from "../../Contex/Context";
import { toast } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const UpdateProfile = () => {
    const { profileUpdate, setUser, user } = useContext(ContextData)
    const [err, setErr] = useState('')

    const update = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        setErr('')
        profileUpdate(name, photo)
            .then((res) => {
                setUser(res);
                toast.success("Profile successfully update")
            })
            .catch((error) => {
                setErr(error.massage);
                toast.error("Something is wrong")
            });
    };
    // console.log(user.photoURL);

    return (
        <div className='flex justify-center items-center my-5 flex-col' data-aos="fade-down" data-aos-duration="1000">
            <Helmet>
                <title>LuxeHaven | Update Profile</title>

            </Helmet>

            <h3 className="text-4xl my-5 font-bold">Profile Update</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    {user && <div className="flex justify-center items-center flex-col space-y-2">
                        <div className="border-[#9d4edd] border-2 rounded-full w-20 p-2">
                            {
                                user && <img className=" w-20 rounded-full " src={user.photoURL ? user.photoURL : 'https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg'}></img>
                            }
                        </div>
                        <p className="font-bold text-2xl"><span className="text-[#5a189a]">Hi</span> , {user?.displayName}</p>
                        <p>{user.email === null ? 'Email not found' : user.email}</p>
                    </div>}
                    <form onSubmit={update}>
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
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        {
                            err && <span>{err}</span>
                        }

                        <div className="form-control mt-6">
                            <button className="btn bg-[#c77dff] text-white font-bold text-xl">Update</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;