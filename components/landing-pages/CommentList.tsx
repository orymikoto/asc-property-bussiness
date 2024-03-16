import { T_Comment } from "@/types/Model";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CommentCard from "../cards/CommentCard";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type Props = {
  comment_list: Array<T_Comment>;
};

export default function CommentList({ comment_list }: Props) {
  return (
    <section className="font-ubuntu flex flex-col items-center text-center lg:px-16 md:px-8 px-4 bg-palete-4 pb-16 w-full max-w-[1920px]">
      <h2 className="text-5xl font-medium leading-[4rem] my-8">
        Kind Words From Our
        <br />
        Happy Customers
      </h2>
      <Swiper
        className="w-full h-[300px] my-8 mb-16"
        spaceBetween={25}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            // width: 576,
            slidesPerView: 2,
          },
          1024: {
            // width: 768,
            slidesPerView: 3,
          },
          1546: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
      >
        {comment_list ? (
          comment_list.map((e, i) => (
            <SwiperSlide className="h-full" key={i}>
              <CommentCard comment={e} />
            </SwiperSlide>
          ))
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
      </Swiper>
    </section>
  );
}
