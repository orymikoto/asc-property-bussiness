import { AspectRatio, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player/youtube";

type Props = {
  url_video: string | undefined;
};

export default function StatAndVideoPlayer({ url_video }: Props) {
  return (
    <section
      id="about"
      className="font-ubuntu text-center flex flex-col items-center relative w-full max-w-[1920px] lg:pb-[60vh] lg:mb-[300px] lg:px-16 md:px-8 px-4 bg-palete-1 py-8"
    >
      <Flex direction={"column"} w={"90%"}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={16}
          w={"100%"}
        >
          <Flex gap={4} alignItems={"center"}>
            <Text
              textAlign={"left"}
              fontSize={"5xl"}
              textColor={"white"}
              className="font-bold"
            >
              11K+
            </Text>
            <Text
              textAlign={"left"}
              className="font-medium text-neutral-400"
              w={155}
            >
              Happy customers with our service
            </Text>
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text
              textAlign={"left"}
              fontSize={"5xl"}
              textColor={"white"}
              className="font-bold"
            >
              22K+
            </Text>
            <Text
              textAlign={"left"}
              className="font-medium text-neutral-400"
              w={155}
            >
              The best property we provide
            </Text>
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text
              textAlign={"left"}
              fontSize={"5xl"}
              textColor={"white"}
              className="font-bold"
            >
              520+
            </Text>
            <Text
              textAlign={"left"}
              className="font-medium text-neutral-400"
              w={155}
            >
              Awesome companies believe in us
            </Text>
          </Flex>
        </Flex>
        <Divider></Divider>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ lg: 0, base: 4 }}
          my={16}
          w={"100%"}
        >
          <h2 className="text-4xl text-white lg:text-left text-center font-medium flex-1">
            Where Property Meets Convenience
          </h2>
          <Text
            textAlign={{ lg: "left", base: "center" }}
            className="text-neutral-400 font-medium flex-1"
          >
            Look For An <strong>Agency With Proven Track Record</strong> Of
            Success In Buying, Selling, Or Renting Properties. You Want An
            Agency That Has Been In The Industry For A While
          </Text>
        </Flex>
      </Flex>
      <div className=" lg:absolute lg:-bottom-56 w-[90%] lg:px-12">
        <div className="aspect-[18/9] rounded-[32px] w-full h-full overflow-hidden">
          <ReactPlayer width="100%" height="100%" url={url_video} />
        </div>
        {/* <video
          title="Video ASC Property Bussiness"
          className="w-full h-full rounded-[2rem] "
          controls
        >
          <source src={url_video} type="viedo/mp4" />
        </video> */}
      </div>
    </section>
  );
}
