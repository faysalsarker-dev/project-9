import { useContext, useState } from "react";
import { ContextData } from "../../Contex/Context";
import { toast } from 'react-hot-toast';


const UpdateProfile = () => {
    const { profileUpdate, setUser } = useContext(ContextData)
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

    return (
        <div className='flex justify-center items-center my-5 flex-col'>
            <h3 className="text-4xl my-5 font-bold">Profile Update</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <form onSubmit={update}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" />
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