import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [signin, setsignin] = useState(true);

    const scrollToForm = () => {
        const formElement = document.getElementById("loginForm");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlesignin = (event) => {
        event.preventDefault();
        setsignin(!signin);
    };

    return (
        <>
            <div className="absolute">
                <Header></Header>
            </div>
            <div className="bg-black h-screen flex flex-col justify-center items-center">
                <div className="absolute">
                    <img src="src/assets/bg-img1.jpeg" alt="" className="h-screen" />
                </div>
                <button
                    className=" bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded absolute animate-bounce mt-96"
                    onClick={scrollToForm}
                >
                    Get Started
                </button>
            </div>
            
            <div id="loginForm" className="h-screen bg-black flex flex-row justify-center items-center">
                <form action="" className="bg-red-600 bg-opacity-50 p-8 rounded w-128 ml-28" >
                    <h1 className="text-white text-3xl font-bold mb-4" style={{fontFamily:"fantasy"}}>{signin?"Sign Up":"Sign In"}</h1>
                    {signin && <input type="text" placeholder="Full Name" className="p-3 w-full rounded mb-4 bg-white" />}
                    <input type="text" placeholder="Email Address" className="p-3 w-full rounded mb-4 bg-white" />
                    <input type="password" placeholder="Password" className="p-3 w-full rounded mb-4 bg-white" />
                    <button className="p-4 w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    {signin?"Sign Up":"Sign In"}
                    </button>
                    <div className="text-white text-center mt-4">
                        <p>{signin?"Already registered":"Don't have an account?"}</p>
                        <button className="text-blue-400" onClick={handlesignin}>{signin?"Sign In":"Sign Up"}</button>
                    </div>
                </form>
                <div className="text-white text-center mt-4 w-128 p-10">
                    <h1 className="text-5xl font-bold mb-5" style={{fontFamily:"fantasy"}}>cine-sync</h1>
                    <h2 className=" text-3xl" style={{fontFamily:"fantasy"}}>Save your favourites easily and always have something to watch.</h2>                   
                </div>
            </div>
        </>
    );
};

export default Login;