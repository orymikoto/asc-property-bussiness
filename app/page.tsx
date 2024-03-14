"use server";

import axios from "axios";

export default async function Home() {
  const response = await axios.get(process.env.Source_API + "properties");

  // console.log(response.data.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
