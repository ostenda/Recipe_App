import Image from "next/image";
import LoginForm from "../components/LoginForm"
import picture from "../../public/images/loginBackgroud.png";

export default function Login() {
  return (
    <>
      <Image
        className="relative -z-10 blur=sm brightness-90"
        src={picture}
        alt="dic"
        fill
      />
      <div
        className="display-flex container w-5/12 h-fit mx-auto  
             bg-lime-200 
             self-center 
             opacity-70 
             rounded-lg border-2 border-slate-800
             p-0"
      >
        <div className="flex flex-col gap-y-4 pt-5 pb-9">
          <div className="self-center pb-6">
            Please log in to see your delicious recipes
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
