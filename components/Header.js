import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

function Header() {
  const [session] = useSession();
  const logout = useRef();
  return (
    <header className="flex items-center z-50 sticky py-2 md:py-0  top-0 px-2  shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex  h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>

      <img
        src="https://image.flaticon.com/icons/png/512/2965/2965335.png"
        alt=""
        width="45"
        height="45"
      />
      <h1 className=" ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="flex flex-grow items-center mx-2 md:mx-20 px-5 py-2 bg-gray-100 rounded-lg text-gray-600 focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow   bg-transparent outline-none text-base"
        />
      </div>

      <div className="flex items-center   justify-end">
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="hidden md:inline-flex h-20 w-20 border-0"
        >
          <Icon name="apps" size="3xl" color="gray" />
        </Button>

        <img
          loading="lazy"
          className="cursor-pointer h-12 w-12 rounded-full ml-2"
          src={session?.user.image}
          onClick={signOut}
          ref={logout}
        />
        <Tooltips placement="bottom" ref={logout}>
          <TooltipsContent>Log Out</TooltipsContent>
        </Tooltips>
      </div>
    </header>
  );
}

export default Header;
