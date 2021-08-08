import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="flex items-center z-50 sticky  top-0 px-2 py-0 md:py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>

      <Icon name="description" size="5xl" color="blue" />
      <h1 className=" ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="flex flex-grow items-center mx-5 md:mx-20 px-5 py-2 bg-gray-100 rounded-lg text-gray-600 focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow   bg-transparent outline-none text-base"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0 flex justify-end"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://avatars.githubusercontent.com/u/66429052?v=4"
      />
    </header>
  );
}

export default Header;
