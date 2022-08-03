import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login, register } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  //user ,loading,error
  const [user, loading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const emailOnChange = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const onLogin = () => {
    login(credential.email, credential.password);
  };

  const onRegister = () => {
    register(credential.email, credential.password);
  };

  const loginOrRegisterHandler = () => {
    if (loginOrRegister === "login") {
      onLogin();
    } else {
      onRegister();
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      navigate("/");
    }

    if (error) {
      toast.error(error, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [loading, user, error, navigate]);

  return (
    <>
      <div className="w-full h-screen flex">
        <img className="opacity-75 hidden lg:block" src="https://i.pinimg.com/originals/e7/f7/87/e7f78705c17fa51936b3176ddb97ec1f.jpg" alt="login" />
        <div className="w-max-[600px] flex flex-col my-auto mx-auto">
          <div className="flex items-center justify-center mb-14">
            <img className="h-10 w-10" src={Logo} alt="Logo" />
            <p className="text-4xl text-slate-800 ml-2 font-semibold">komiKuy</p>
          </div>
          <h1 className="text-slate-700 text-center text-2xl my-4 font-bold">{loginOrRegister === "login" ? "Login" : "Register"}</h1>
          <input onChange={emailOnChange} className="my-2 p-2 rounded text-sky-200 bg-sky-900" type="text" placeholder="Email" autoComplete="email" />
          <input onChange={passwordOnChange} className="my-2 p-2 rounded text-sky-200 bg-sky-900" type="password" placeholder="Password" autoComplete="current-password" />
          <button onClick={loginOrRegisterHandler} className="bg-sky-700 text-gray-50 p-3 my-4 hover:bg-sky-500 hover:text-gray-100 rounded-lg">
            {loginOrRegister === "login" ? "Login" : "Register"}
          </button>
          {loginOrRegister === "login" ? (
            <div className="text-slate-700">
              <p>
                Belum mempunyai akun?{" "}
                <Link to="/register" className="text-sky-700 font-semibold hover:text-sky-400">
                  Register
                </Link>
              </p>
            </div>
          ) : (
            <div className="text-slate-700">
              <p>
                Sudah mempunyai akun?{" "}
                <Link to="/login" className="text-sky-700 font-semibold hover:text-sky-400">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginOrRegister;
