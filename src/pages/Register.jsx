import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().min(12).required(),
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


  const ErrorFullname =errors.fullName?.message;
  const Errormail = errors.email?.message;
   const Errorpassword = errors.password?.message;
   const Errorconfirmpassword = errors.confirmpassword?.message;
   const errorphonenumber = errors.phone?.message


   
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{ErrorFullname }</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{Errormail}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errorphonenumber}</p>
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
  );
};
