import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "../style.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 5,
  color: "#2E82EE",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}

export default MyApp;
