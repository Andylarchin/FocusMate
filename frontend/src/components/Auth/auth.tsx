import "./style.css";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <>
      <div className="container">
        <div className="loginHalf">
          <div className="login">
            <div className="loginForm">
              <p>Start your journey!</p>
              <h3>Sign up to FocusMate</h3>
              <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="What is your email?"
                  {...register("username")}
                  className="authInput"
                />
                <input
                  type="text"
                  placeholder="Input your password!  "
                  className="authInput"
                  {...register("password", { required: true })}
                />
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
        <div className="imageHalf">
          <img src="src\images\pexels-geladelrosario-4341879.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Auth;
