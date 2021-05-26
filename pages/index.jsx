import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import Head from "next/head";
import Fetch from "isomorphic-unfetch";

export default function Home() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div>
      <Head>
        <title>caramelog</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
