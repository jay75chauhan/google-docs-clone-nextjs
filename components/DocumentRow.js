import React from "react";
import { useRouter } from "next/dist/client/router";
import Button from "@material-tailwind/react/Button";

import Icon from "@material-tailwind/react/Icon";

function DocumentRow({ id, fileName, data }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center bg-gray-50 p-4 pr-0 rounded-lg hover:bg-gray-100 mb-5 cursor-pointer shadow-md hover:shadow text-gray-700 text-sm active:scale-95"
    >
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{data?.toDate().toLocaleDateString()}</p>
      <Button
        color="gray"
        buttonType="outline"
        iconOnly={true}
        rounded={true}
        ripple="dark"
        className="border-0 ml-2"
      >
        <Icon name="more_vert" size="3xl" />
      </Button>
    </div>
  );
}

export default DocumentRow;
