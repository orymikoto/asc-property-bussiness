import { T_Property } from "@/types/Model";
import React from "react";
import PropertyCard from "../cards/PropertyCard";
import Image from "next/image";

type Props = { properties: Array<T_Property> };

export default function PropertyList({ properties }: Props) {
  return (
    <section
      id="service"
      className="font-ubuntu flex flex-col items-center text-center lg:px-16 md:px-8 px-4 bg-palete-4 pb-16 w-full max-w-[1920px]"
    >
      <h2 className=" font-medium text-5xl text-neutral-900 my-4">
        Our Popular Property
      </h2>
      <div className="font-medium text-neutral-500 my-6">
        Look For An <strong>Agency With Proven Track Record</strong> Of Success
        In Buying, Selling, Or Renting Properties.
        <br /> You Want An Agency That Has Been In The Industry For A While
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-8 lg:px-12 px-4 my-8 mt-16">
        {properties ? (
          properties
            .slice(0, 6)
            .map((e, i) => <PropertyCard property={e} key={i} />)
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <Image
              src="/image/no-data.png"
              width={600}
              height={400}
              alt="Data Property Tidak Ditemukan"
            />
          </div>
        )}
      </div>
      <button className="px-6 py-3 bg-palete-1 text-palete-2 rounded-xl font-medium my-8 hover:text-palete-1 hover:bg-palete-2 hover:shadow-md hover:shadow-palete-1/50 duration-200">
        Explore All Property
      </button>
    </section>
  );
}
