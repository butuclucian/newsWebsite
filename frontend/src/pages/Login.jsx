import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { assets } from "../assets/assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || (currentState === "signup" && !email)) {
      toast.error("Please fill out all required fields!");
      return;
    }

    if (currentState === "login") {

      if (username === "admin" && password === "12345678") {
        const loggedInUser = { username: "admin", role: "admin" };
        localStorage.setItem("user", JSON.stringify(loggedInUser));  
        login(loggedInUser);  
        toast.success("Successfully logged in!");
        navigate('/');

      } if (username === "user" && password === "12345678") {
        const loggedInUser = { username: "user", role: "user"};
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        login(loggedInUser);
        toast.success("Successfully logged in!");
        navigate('/');
      } else {
        toast.error("Invalid username or password!");
      }

    } else {
      // new acc
      try {
        const response = await axios.post('http://localhost:5000/api/user/register', { name: username, email, password });

        if (response.data.success) {
          toast.success("Account created successfully!");
          setCurrentState("login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error while creating account.");
      }
    }


    // reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center text-white px-4 mt-45">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-[20.9375rem] space-y-6">
        {/* --- title --- */}
        <div className="text-center">
          <h2 className="text-2xl font-bold dark:text-[#7e8082]">{currentState === "login" ? "Login to Account" : "Create Account"}</h2>
          <p className="text-sm text-gray-400 mt-1">{currentState === "login" ? "Enter your personal data to join your account" : "Fill in the fields to sign up for a new account"}</p>
        </div>

        {/* --- form ---- */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-[#7e8082]">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" className="w-full px-4 py-2 rounded-md bg-[#212121] dark:bg-[#7e8082] text-white dark:placeholder-white placeholder-gray-500 focus:outline-none" />
          </div>

          {currentState === "signup" && (
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-[#7e8082]">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 rounded-md bg-[#212121] text-white dark:bg-[#7e8082] dark:placeholder-white placeholder-gray-500 focus:outline-none" />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-[#7e8082]">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-4 py-2 pr-10 rounded-md bg-[#212121] dark:bg-[#7e8082] dark:placeholder-white text-white placeholder-gray-500 focus:outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer dark:text-white">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {currentState === "login" && (
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-gray-400 hover:text-white dark:text-[#7e8082] dark:hover:text-black">
                  Forgot Password?
                </a>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <span className="border-t border-gray-600 w-1/2" />
            <span className="mx-2 text-gray-400">or</span>
            <span className="border-t border-gray-600 w-1/2" />
          </div>

          <button type="button" className="cursor-pointer flex items-center justify-center w-full px-4 py-2 bg-[#212121] hover:bg-gray-800 text-white border border-gray-700 rounded-md">
            <FaFacebookF className="mr-2" />Facebook
          </button>

          <button type="submit" className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition cursor-pointer ">
            {currentState === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          {currentState === "login" ? (
            <>
              Don't have an account?{" "}
              <button onClick={() => setCurrentState("signup")} className="font-semibold text-white hover:underline dark:text-[#7e8082] cursor-pointer">Sign Up</button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setCurrentState("login")} className="font-semibold text-white hover:underline dark:text-[#7e8082] cursor-pointer">Log In</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
