import {HeartIcon} from "@heroicons/react/24/outline"
import {ArrowLongRightIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react";
import { useMutation } from "react-query"
import axios from "axios";
import useSession from "../hooks/useNextAuth"
import useCloudinary from "../hooks/useCloudinary";
import { AdvancedImage } from "@cloudinary/react"

export default function RecipeShow({recipe}) {
    
    // images
    const {Cloudinary} = useCloudinary()

    //So just registered users can like recipes!
    const {data: session} = useSession()

    const {mutate} = useMutation(
        (recipe : unknown) => {
            return axios.post("/api/recipes/like", recipe, {
                withCredentials: true});
        }
    )


    return(
        <div className="rounded-3xl bg-orange-300 w-full p-8 m-5">
            <div className="flex">  
                <div>
                    <h1 className="font-bold p-1 m-2" data-test="recipe-name">{recipe.name}</h1>
                    <h2 className="font-light p-1 m-2" data-test="recipe-author">By: {recipe.author.name}</h2>
                </div>            
            </div>
            {recipe.photo && (<>
                <AdvancedImage className='rounded-3xl w-2/3 ml-2 mt-4 mb-4' cldImg={Cloudinary.image(recipe.photo)}/>
            </>)}
            <div className="flex">
                {recipe.categories && recipe.categories.map((category, i) => {           
                    return (
                        <div key={i}>
                           <div className="rounded-2xl text-black p-1 m-2">{category.name}</div>
                        </div>
                    ) 
                })}
            </div>
            <div className="flex m-5">
                
                <div className="m-5" data-test="recipe-details">
                    <div>Dificulty: {recipe.dificulty}</div>
                    <div>Time: {recipe.time_hours} h {recipe.time_minutes} min</div>
                    <div>People: {recipe.number_people}</div>
                    <div>Steps: 7</div>
                </div>
                
                <div className="m-5" data-test="recipe-ingredients">
                    <div>Ingredients:</div>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map((ingredient, i) => {           
                            return (
                                <div key={i}>
                                    <li  className="rounded-2xl text-black p-1 m-2">{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                                </div>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
            <Link href={`recipes/${recipe._id}`}>
                <button className="flex text-black font-bold">
                    <div className=""></div><ArrowLongRightIcon className="w-10 ml-5"/>
                </button>
            </Link>
        </div>
    )
}
