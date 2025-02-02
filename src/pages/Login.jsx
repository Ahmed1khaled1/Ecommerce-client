import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const submitHandler = (e)=>{
e.preventDefault()
  } 
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center mx-auto my-14 w-[90%] sm:max-w-96 gap-3"
    >
      <p className="text-3xl prata-regular pt-10">{currentState}</p>
      {currentState === "login" ? (
        ""
      ) : (
        <input
          type="text"
          className=" w-full p-2 border rounded-md  "
          placeholder="Name"
        />
      )}
      <input
        type="email"
        className=" w-full p-2 border rounded-md "
        placeholder="Email"
      />
      <input
        type="password"
        className=" w-full p-2 border rounded-md  "
        placeholder="Password"
      />
      {currentState === "login" ? (
        <div className="flex justify-between w-full font-semibold">
          <p className="cursor-pointer">Forger Your Password?</p>
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("signUp")}
          >
            Create new account
          </p>
        </div>
      ) : (
        <p className="cursor-pointer w-full text-end font-semibold" onClick={() => setCurrentState("login")}>
          Login Here
        </p>
      )}
      <button className="bg-black text-white my-5 px-10 py-3 cursor-pointer">
        {currentState === "login" ? "Sign IN" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
