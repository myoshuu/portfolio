import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio - Joevano</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container p-5">
        <div className="border w-full">
          <p className="text-2xl">Joevano Alfeus Pangangkat</p>
        </div>
      </div>
    </div>
  );
}
