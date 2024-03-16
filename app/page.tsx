"use server";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PropertyList from "@/components/landing-pages/PropertyList";
import SliderProperties from "@/components/landing-pages/SliderProperties";
import LandingPage from "@/components/pages/LandingPage";
import { T_Comment, T_Property } from "@/types/Model";
import axios from "axios";

const getData = async (): Promise<
  [Array<T_Property> | undefined, Array<T_Comment> | undefined]
> => {
  try {
    const properties = await axios.get(process.env.Source_API + "properties");
    const comments = await axios.get(process.env.Source_API + "komentars");
    return [
      properties.data.data as Array<T_Property>,
      comments.data.data as Array<T_Comment>,
    ];
  } catch (error) {
    console.error(error);
    return [undefined, undefined];
  }
};

export default async function Home() {
  // console.log(response.data.data);
  const [properties, comments] = await getData();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <>
      <NavBar />
      <LandingPage properties={properties} comments={comments} />
      <Footer />
      {/* <PropertyList properties={properties ? properties : []} /> */}
    </>
    // </main>
  );
}
