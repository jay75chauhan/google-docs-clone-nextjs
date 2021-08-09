import React, { useRef } from "react";
import Head from "next/head";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession, signout, getSession } from "next-auth/client";
import { db } from "../../firebase";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { useRouter } from "next/dist/client/router";
import Login from "../../components/Login";
import TextEditor from "../../components/TextEditor";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;
  const router = useRouter();
  const { id } = router.query;
  const logout = useRef();

  const [snapshot, loadingSnapshot] = useCollectionOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  //user not have acces the re direct to home page

  if (!loadingSnapshot && !snapshot.data().fileName) {
    router.replace("/");
  }

  return (
    <div className="bg-white">
      <Head>
        <title> {snapshot?.data()?.fileName}</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2965/2965335.png"
        />
      </Head>

      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <img
            src="https://image.flaticon.com/icons/png/512/2965/2965335.png"
            alt=""
            width="50"
            height="50"
            className="p-1"
          />
        </span>
        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          className="hidden md:inline-flex h-10 mr-4"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          <Icon name="people" size="md" /> SHARE
        </Button>
        <img
          src={session.user.image}
          className="rounded-full cursor-pointer h-11 w-11  ml-2"
          ref={logout}
          onClick={signout}
        />
        <Tooltips placement="bottom" ref={logout}>
          <TooltipsContent>Log Out</TooltipsContent>
        </Tooltips>
      </header>

      <TextEditor />
    </div>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
