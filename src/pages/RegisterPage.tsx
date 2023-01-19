import React from "react";
import Image from "next/image";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <>
      <Image
        className="index -z-10"
        alt="The shelves you are going to be put in!"
        src="/images/register-background.jpeg"
        fill
      />
      <div className="flex-column mx-auto justify-center items-center my-10">
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterPage;
