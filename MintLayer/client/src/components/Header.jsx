import React from "react";
import Button from "./Button";
import ConnectButton from "./ConnectButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Header() {

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        {/* <img 
          className="rounded-full h-20 w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WkTt5462C95lYurbWL1ic0jtmW9UOGxlB-cFd3A3Dm8U8UFTELI-jNqmx-c-HlGd8NA&usqp=CAU" 
          alt="avatar" 
        /> */}
        <ConnectButton />
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="p-4 space-x-2">
          <Button title="useless"/>
        </div>
      </div>
      <div className="flex flex-col ml-auto">
        <Bars3BottomRightIcon className="h-8 w-8 text-white mx-auto cursor-pointer"/>
      </div>
    </header>
  );
}


export default Header;