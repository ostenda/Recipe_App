import Image from "next/image";
import LoginForm from "../components/LoginForm";
import {HomeIcon} from "@heroicons/react/24/outline";

export default function Login() {
  return (
    <div className="flex-column justify-center items-center h-screen">
      <HomeIcon className="h-10 w-10 mx-auto mb-10" />
      <Image
        className="relative -z-10 blur=sm brightness-90"
        src="/images/loginBackgroud.png"
        alt="dic"
        fill
      />
      <div
        className="flex container w-fit h-fit mx-auto
             justify-center
             items-center 
             bg-lime-200 
             self-center 
             opacity-70 
             rounded-lg border-2 border-slate-800
             p-0
             "
      >
        <div className="flex flex-col gap-y-4 pt-5 pb-9 mx-10">
          <div className="self-center pb-6">
            Please log in to see your delicious recipes
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
