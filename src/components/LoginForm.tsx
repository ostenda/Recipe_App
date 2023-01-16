import React, { useState } from "react";
import { useForm, Resolver } from "react-hook-form";

type CredentialsTypes = {
  username: string;
  password: string;
};

const resolver: Resolver<CredentialsTypes> = async (values) => {
  return {
    values: values.username ? values : {},
    errors: !values.username
      ? {
        username: {
          type: "required",
          message: "Please enter a valid username",
        },
        password: {
          type: "required",
          message: "Please enter a valid password",
        },
      }
      : {},
  };
};

function LoginForm() {
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsTypes>({ resolver });

  const sendDetails = handleSubmit((data) => console.log(data));
  const openRegisterForm = () => console.log("start registering");
  return (
    <form
      className="w-full h-full flex flex-col space-y-4 px-8 "
      onSubmit={sendDetails}
    >
      <input
        className="border-2 rounded-sm
                            border-amber-700 
                            border-double outline-offset-2
                            text-lg 
                            "
        type="text"
        id="uname"
        placeholder="Username"
        {...register("username")}
      />

      {errors?.username && (
        <p className="font-bold text-red-600 uppercase ">
          {errors.username.message}
        </p>
      )}

      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        className="border-2 rounded-sm
                                border-amber-700 
                                border-double outline-offset-2
                                text-lg
                                "
        onChange={(e) => setPassword(e.target.value)}
      />

      {errors?.password && (
        <p className="font-bold text-red-600 uppercase ">
          {errors.password.message}
        </p>
      )}

      <input
        className="rounded-l border-4 border-teal-600 bg-teal-600 w-auto mx-auto bg-gre"
        type="submit"
        value="submit"
      />
      <h4>Not logged in? Register here!</h4>
      <button onClick={openRegisterForm}>Register</button>
    </form>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
