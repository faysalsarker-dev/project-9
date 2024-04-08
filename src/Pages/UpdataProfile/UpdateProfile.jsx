import { useContext } from "react";
import { ContextData } from "../../Contex/Context";


const UpdateProfile = () => {
    const { profileUpdate,setUser } = useContext(ContextData)

    const update = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        profileUpdate(name, photo)
            .then((res) => {
                setUser(res);
            })
            .catch((error) => {
                console.error("Error updating profile: ", error);
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
                            <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-xl">Update</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;