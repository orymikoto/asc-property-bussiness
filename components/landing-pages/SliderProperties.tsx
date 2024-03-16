import { Button, Flex, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import React, { useState } from "react";
import { T_Property } from "@/types/Model";

type Props = { properties_slide: Array<T_Property> };

export default function SliderProperties({ properties_slide }: Props) {
  const [swiper, setSwiper] = useState(0);
  // console.log(properties_slide);

  return (
    <section
      id="home"
      className="font-ubuntu text-center lg:mb-32 flex flex-col items-center relative lg:h-screen lg:max-h-[1080px] w-full max-w-[1920px] lg:px-16 md:px-8 px-4 bg-palete-4  pt-20 md:pt-0"
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={4}
        className="lg:absolute top-12 w-full z-10"
      >
        <h1 className="text-6xl font-medium">
          Investing In Your Future <br />
          One Home At A Time
        </h1>
        <Text className="font-medium lg:text-white text-neutral-700 my-4 text-lg">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          We'll help you find the key to your <strong>dream home</strong>.
          Experience the joy of <br /> homeownership. Let us make{" "}
          <strong>your home buying</strong> journey simple.
        </Text>
        <button className="px-10 py-3 mt-4 border-2 font-medium border-palete-1 rounded-xl bg-white/25 hover:text-white hover:bg-palete-1 hover:shadow-md hover:shadow-palete-1/50 duration-200">
          Get Started
        </button>
      </Flex>
      <Swiper
        onActiveIndexChange={(e) => setSwiper(e.activeIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="rounded-3xl overflow-hidden w-full lg:h-screen md:h-[450px] h-[300px] lg:my-0 my-8"
      >
        <SwiperSlide className="w-full h-full bg-[url('/image/slider1.jpg')] bg-cover bg-center"></SwiperSlide>
        <SwiperSlide className="w-full h-full bg-[url('/image/slider2.jpg')] bg-cover bg-center"></SwiperSlide>
        <SwiperSlide className="w-full h-full bg-[url('/image/slider3.jpg')] bg-cover bg-center"></SwiperSlide>
      </Swiper>
      <span className="lg:absolute lg:my-0 my-4 lg:-bottom-16 lg:w-[80vw] lg:max-w-[1536px] w-full rounded-3xl px-8 lg:h-32 h-40 lg:z-10 lg:py-0 py-4 bg-white flex lg:flex-row flex-col gap-y-2 justify-evenly items-center">
        <span className="flex justify-evenly items-center lg:flex-1 w-full">
          <div className="flex flex-col lg:items-start items-center lg:pl-12 flex-1">
            <div className="font-medium">Location</div>
            <div className="text-neutral-400 font-medium">
              {properties_slide.length >= 1
                ? properties_slide[swiper].alamat.split(",")[1]
                : "unknown"}
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:pl-12 border-x border-x-palete-1 flex-1">
            <div className="font-medium">Property Type</div>
            <div className="text-neutral-400 font-medium">
              {properties_slide.length >= 1
                ? properties_slide[swiper].nama_property
                : "unknown"}
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:pl-12 flex-1">
            <div className="font-medium">Budget</div>
            <div className="text-neutral-400 font-medium">
              {properties_slide.length >= 1
                ? // @ts-ignore
                  `Rp ${properties_slide[swiper].harga.toLocaleString("id-ID")}`
                : "unknown"}
            </div>
          </div>
        </span>

        <button className="px-8 py-3 bg-palete-3 rounded-xl text-palete-4">
          Search Property
        </button>
      </span>
    </section>
  );
}
