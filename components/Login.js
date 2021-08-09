import React from "react";
import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div className="  flex h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Google Docs Login </title>
        <meta name="description" content="login " />
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2965/2965335.png"
        />
      </Head>

      <div className="bg-transparent   backdrop-blur-md z-20  shadow-2xl  rounded-3xl items-center justify-center p-12 sm:p-24  ">
        <div className=" flex   items-center justify-center">
          <div className="p-2 shadow-2xl animate-ping absolute  bg-blue-400 rounded-full -top-1 -right-0 " />
          <Image
            src="https://image.flaticon.com/icons/png/512/2965/2965335.png"
            height={150}
            width={150}
            object-fit="contain"
          />
        </div>
        <div className="flex flex-col   mt-3">
          <h1 className="text-center text-4xl font-medium text-gray-700 ">
            Google
            <span className="font-normal pl-3">Docs</span>
          </h1>
          <button
            onClick={signIn}
            className="  mt-12 py-3  focus:outline-none text-xl border-0  shadow-2xl hover:shadow-md active:scale-95 hover:bg-[#558bdd]  bg-blue-400  font-medium  outline-none       rounded-lg text-white text-center cursor-pointer"
          >
            Login with{" "}
          </button>
          <a
            className=" mt-2 pl-32 text-gray-600 hover:text-gray-900 hover:underline no-underline md:hover:underline text-xs"
            href="https://github.com/jay75chauhan"
            target="_blank"
          >
            @jayChauhan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
