import { SetStateAction, useState } from "react";
import Input from "../../components/Input";

const Auth = () => {
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");



  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className='bg-black w-full h-full lg:bg-opacity-60'>
        <nav className='px-12 py-5'>
          <img className='h-12' src='/images/logo.png' alt='' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:2-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
            <div className='flex flex-col gap-4'>
              <Input
                id='name'
                onChange={(ev: {
                  target: { value: SetStateAction<string> };
                }) => {
                  setUsername(ev.target.value);
                }}
                label='Username'
                value={username}
              ></Input>
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
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
            <p className="text-neutral-500 mt-12 text-center">First time using Netflix? 
            <br />
            <span className="text-white ml-1 hover:underline cursor-pointer">
                Create An Account
            </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
