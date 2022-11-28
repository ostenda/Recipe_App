import Image from "next/image"
import picture from "../public/images/loginBackgroud.png"
import { useState } from "react"
import { useForm, Resolver } from "react-hook-form"


type CredentialsTypes = {
    username: string
    password: string

}

const resolver: Resolver<CredentialsTypes> = async (values) => {
    return {
        values: values.username ? values : {},
        errors: !values.username
            ? {
                username: {
                    type: "required",
                    message: "Please enter a valid username",
                },

            } : {},
    }
}

export default function Login() {
    const [password, setPassword] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsTypes>({ resolver })

    const sendDetails = handleSubmit((data) => console.log(data))


    return (
        <>
            <Image className="relative -z-10 blur=sm brightness-90" src={picture} alt="dic" fill />
            <div className="display-flex container w-5/12 h-fit mx-auto  
             bg-lime-200 
             place-content-center 
             self-center 
             opacity-80 
             rounded-lg border-2 border-slate-800">
                <div className="flex flex-col justify-center gap-y-4 pt-5 pb-9">
                    <div className="display-flex">Please log in to see your delicious recipes</div>
                    <form className="display-flex indent-2" onSubmit={sendDetails}>
                        <label htmlFor="fname">Username</label>
                        <input className="border-2 rounded-sm
                            border-amber-700 
                            border-double outline-offset-2
                            
                            "
                            type="text" id="uname" placeholder="Dick"
                            {...register("username")} />

                        {errors?.username && <p>{errors.username.message}</p>}

                        <label htmlFor="pass">Password</label>
                        <input type="password" name="password" value={password}
                            className="border-2 rounded-sm
                                border-amber-700 
                                border-double outline-offset-2
                                "
                            onChange={e => setPassword(e.target.value)}
                        />

                        <input className="" type="submit" value="submit" />
                    </form>

                </div>
            </div>

        </>
    )
}