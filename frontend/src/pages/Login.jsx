import { useState } from "react";
import axios from "axios";
import Landing from "./Landing";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3001/api/v1/signin", {
        email: email,
        password: password,
      });

      // Handle successful login here
      if (response.status === 200) {
        console.log("Login successful", response.data);
        window.location.href = "/home";
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="relative">
      <div className="opacity-10">
        <Landing />
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-screen">
        <div className="w-[600px] h-[650px] bg-white border-1 border-rounded shadow-2xl rounded-lg absolute z-50">
          <a href="/">
            <div className="flex justify-end pr-5 pt-3 text-2xl text-slate-500 font-extralight">
              X
            </div>
          </a>
          <div className="flex flex-col items-center mt-16">
            <h1 className="text-3xl">Login with email</h1>
            <h1 className="font-extralight mt-8">
              Enter your email address to login an
            </h1>
            <h1 className="font-extralight">account</h1>

            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <h1 className="mt-8 font-normal">Enter your email</h1>
              <input
                className="bg-[#F2F2F2] focus:outline-none focus:border-2 focus:bg-white focus:border-black rounded-md w-60 h-8 mt-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h1 className="mt-8 font-normal">Enter your password</h1>
              <input
                className="bg-[#F2F2F2] focus:outline-none focus:border-2 focus:bg-white focus:border-black rounded-md w-60 h-8 mt-3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-black text-white rounded-2xl w-40 h-10 mt-8"
              >
                Login
              </button>
            </form>

            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
