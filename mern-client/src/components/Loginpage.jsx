import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { signInWithEmailAndPassword } from "firebase/auth";
import googleLogo from "../assets/google-logo.svg";
import signupbanner from "../assets/loginbanner3.jpg";
import { auth } from '../context/AuthProvider';
const Loginpage = () => {
    const { setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Authenticate user with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // If login is successful, setUser with the signed-in user and navigate to the previous page
            const user = userCredential.user;
            setUser(user);
            alert("Logged in Successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            // If there's an error during login, handle it here
            setError(error.message);
        }
    }

    return (
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
                <img src={signupbanner} alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>

            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form onSubmit={handleLogin} className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome Back!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Log in to continue.</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        {/* Email Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
                    </div>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        {/* Password Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <p className="text-sm font-normal text-gray-600 mb-7">Don't have an account? <Link to="/sign-up" className="text-black hover:text-blue-500">Sign Up Now</Link></p>

                    {error && <p className="text-red-500">{error}</p>}

                    <hr />
                </form>
            </div>
        </div>
    );
}

export default Loginpage;
