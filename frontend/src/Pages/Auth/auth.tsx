import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data: object) => {
    try {
      console.log(data);
      Swal.fire("Good job!", "You are being logged in!", "success").then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      Swal.fire("Oops...", "Invalid credentials", "error");
    }
  };
  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-between">
          <p className="text-lg">Start your journey!</p>
          <h3 className="text-2xl font-bold">Sign up to FocusMate</h3>
          <br></br>
          <form className="flex flex-col items-center w-full" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="What is your email?"
              {...register("username")}
              className="w-1/2 p-3 mb-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Input your password!"
              className="w-1/2 p-3 mb-2 border border-gray-300 rounded"
              {...register("password", { required: true })}
            />
            <button type="submit" className="w-1/5 p-3 bg-blue-500 text-white rounded">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img src="src/images/pexels-geladelrosario-4341879.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Auth;
