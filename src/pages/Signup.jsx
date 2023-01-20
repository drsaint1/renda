import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import   "./login.css";
import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

 const Register= ({ isShowSignup }) => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
    
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

  });


  
  const Errormail = errors.email?.message;
   const Errorpassword = errors.password?.message;
   const Errorconfirmpassword = errors.confirmpassword?.message;
  


   
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`${isShowSignup ? "active" : ""} show`}>
    <div className="login">
    <h1 className="loginTitle">Sign up to Renda</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
         Continue with Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Continue with Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Continue with  Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{Errormail}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{Errorpassword}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{Errorconfirmpassword}</p>
      <input type="submit" />
    </form>
    </div>
    </div>
    </div>
  </div>
  );
};
export default Register;