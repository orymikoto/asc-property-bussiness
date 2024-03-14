"use server";

import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const response = await axios.get(
    "https://next-probation-22.sepakat.cloud/api/probation/properties"
  );

  console.log(response.data.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
