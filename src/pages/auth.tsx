import { SetStateAction, useCallback, useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((curr) => (curr === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });

    } catch (err) {
      console.log(err);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (err) {
      console.log(err);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className='bg-black w-full h-full lg:bg-opacity-60'>
        <nav className='px-12 py-5'>
          <img className='h-12' src='/images/logo.png' alt='' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black lg:bg-opacity-80 px-16 py-16 self-center mt-2 lg:2-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === "register" && (
                <Input
                  id='name'
                  onChange={(ev: {
                    target: { value: SetStateAction<string> };
                  }) => {
                    setName(ev.target.value);
                  }}
                  label='name'
                  value={name}
                ></Input>
              )}
              <Input
                id='email'
                type='email'
                onChange={(ev: {
                  target: { value: SetStateAction<string> };
                }) => {
                  setEmail(ev.target.value);
                }}
                label='Email'
                value={email}
              ></Input>
              <Input
                id='password'
                type='password'
                onChange={(ev: {
                  target: { value: SetStateAction<string> };
                }) => {
                  setPassword(ev.target.value);
                }}
                label='Password'
                value={password}
              ></Input>
              <button
                onClick={variant === "login" ? login : register}
                className='bg-red-600 py-3 text-white rounded-md w-full mt-6 hover:bg-red-700 transition'
              >
                {variant === "login" ? "Sign In" : "Register"}
              </button>
              <div className='flex items-center mt-8 flex-row gap-4 justify-center'>
                <div
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "/profiles",
                    })
                  }
                  className='
              w-10
              h-10
              bg-white
              rounded-full
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-80
              transition
              '
                >
                  <FcGoogle size={30}></FcGoogle>
                </div>
                <div
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "/profiles",
                    })
                  }
                  className='
              w-10
              h-10
              bg-white
              rounded-full
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-80
              transition
              '
                >
                  <FaGithub size={30}></FaGithub>
                </div>
              </div>
            </div>

            <p className='text-neutral-500 mt-5 text-center'>
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <br />
              <span
                className='text-white ml-1 hover:underline cursor-pointer'
                onClick={toggleVariant}
              >
                {variant === "login" ? "Register" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
