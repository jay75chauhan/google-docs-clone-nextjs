import Head from "next/head";
import Header from "../components/Header";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Google Docs</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2965/2965335.png"
        />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between  py-6">
            <h1 className="text-gray-700 text-lg">Start a new document</h1>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              rounded={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 border-[#F8F9FA] cursor-pointer  shadow  hover:border-blue-700">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
