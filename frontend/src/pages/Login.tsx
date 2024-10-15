import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col w-screen justify-center items-center bg-gradient-to-t from-gradient-start to-gradient-end">
      <form className="flex flex-col gap-4 bg-slate-200 h-2/3 w-1/3 p-4 ">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </form>
    </div>
  );
};

export default Login;
