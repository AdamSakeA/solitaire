import React, { FC, ReactNode, JSX } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`Adam : ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <main
        className={`${inter.className} container py-[50px] px-[20px] md:px-[100px] xl:mx-auto bg-gray-100`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
