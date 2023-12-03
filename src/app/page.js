"use client"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'animate.css';

import Slider from "./components/Slider";
import Support from "./components/Support";
import Layout from "./components/Layout";
import AllProduct from "./components/AllProduct";


export default function Home() {
  return (
    <>
      <Layout>
        <Slider />
        <Support />
        <AllProduct/>
      </Layout>

    </>

  )
}
