import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function ConnectionAndSponsors({}: Props) {
  return (
    <section className="font-ubuntu text-center flex flex-col items-center relative w-full max-w-[1920px] lg:px-16 md:px-8 px-4 bg-palete-2 py-16">
      <Flex justifyContent={"space-between"} w="100%" mb={12}>
        {[...Array(5)].map((e, i) => (
          <Image
            key={i}
            src={`/image/sponsor${i + 1}.png`}
            width={128}
            height={128}
            className="object-contain w-12 sm:w-16 md:w-24 lg:w-32"
            alt={`Sponsor Number ${i + 1} of ASC Property`}
          />
        ))}
      </Flex>
      <Flex
        w={{ lg: "80%", base: "90%" }}
        justifyContent={"center"}
        direction={{ base: "column", lg: "row" }}
        gap={16}
        className="lg:h-[80vh] "
      >
        <Stack className="flex-1 lg:self-center" spacing={2}>
          <h2 className="text-palete-1 text-5xl font-medium lg:text-left text-center leading-[4rem]">
            Navigating Your <br /> Real Estate Journey
          </h2>
          <Text
            textAlign={{ lg: "left", base: "center" }}
            className="font-medium text-neutral-600 my-4"
          >
            Look For An <strong>Agency With Proven Track Record</strong> Of
            Success In Buying, Selling, Or Renting Properties. You Want An
            Agency That Has Been In The Industry For A While And Has Experience
            Dealing With <strong>Various Types Of Properties</strong>
          </Text>
          <a
            id="contact"
            href="https://andalansolusicemerlang.co.id"
            className="w-[150px] font-medium py-3 text-white mt-8 self-center lg:self-start bg-palete-1 rounded-xl hover:bg-white hover:text-palete-1 hover:shadow-md hover:shadow-palete-1/50 duration-200"
          >
            Contact Us
          </a>
        </Stack>
        <Stack className="lg:h-full items-center lg:min-h-0 min-h-[480px] w-full lg:flex-1 relative">
          {/* <div className="bg-[url('/image/cardbg.jpg')] bg-cover lg:h-full h-480px z-10 w-[80%] lg:max-h-[720px] rounded-3xl shadow-xl shadow-neutral-600/50" /> */}
          <Image
            src="/image/cardbg.jpg"
            width={625}
            height={1125}
            alt="Image of Navigating Your Real Estate Journey"
            className="object-cover lg:h-full h-480px z-10 lg:w-[80%] w-full lg:max-h-[720px] rounded-3xl shadow-xl shadow-neutral-600/50"
          />
          <Box className="absolute z-10 lg:top-[60%] -top-12 lg:-left-[64px] bg-palete-2 shadow-md flex flex-col lg:p-8 p-4 rounded-2xl lg:w-[248px] w-[200px]">
            <Text
              textAlign={"left"}
              className="text-palete-3 font-bold text-5xl "
            >
              22K+
            </Text>
            <Text textAlign={"left"} className="text-palete-1 font-medium">
              Property ready to sell
            </Text>
          </Box>
          lg:
        </Stack>
      </Flex>
    </section>
  );
}
