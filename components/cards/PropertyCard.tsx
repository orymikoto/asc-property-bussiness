import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";

import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { FaCar } from "react-icons/fa";

import { T_Property } from "@/types/Model";
import NextImage from "next/image";

type Props = {
  property: T_Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Card
      maxW="md"
      rounded={16}
      className=" bg-palete-2 overflow-hidden  font-ubuntu justify-self-center"
    >
      <CardBody padding={0} pb={4}>
        <NextImage
          src={property.gambar ? property.gambar : "/image/image-not-found.jpg"}
          className="object-cover 2xl:h-[350px] xl:h-[300px] lg:h-[250px] md:h-[200px] h-[150px]"
          width={720}
          height={350}
          alt={`Foto Property ${property.nama_property}`}
        />
        <Stack mt="6" className="md:px-6 px-2 text-left">
          <Text className="text-palete-3 text-lg md:text-2xl whitespace-nowrap font-medium ">
            {/* @ts-ignore */}
            Rp {property.harga.toLocaleString("id-ID")}
          </Text>
          <Text className="text-palete-1 font-medium md:text-lg text-md whitespace-nowrap ">
            {property.nama_property}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter padding={0} className="h-full">
        <Stack
          justifyContent={"space-between"}
          gap={3}
          my={4}
          className="md:px-6 px-2 text-left "
        >
          <Flex
            // alignItems={"center"}
            className="items-center"
            columnGap={2}
          >
            <IoLocationOutline className="min-w-6 min-h-6 text-palete-1" />
            <Text className="text-palete-1 font-medium ">
              {property.alamat}
            </Text>
          </Flex>

          <Flex
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
          >
            <Flex alignItems="center" columnGap={2}>
              <IoBedOutline className="w-5 h-w-5 text-palete-1" />
              <Text className="text-palete-1 font-medium ">
                {`${property.fasilitas.tempat_tidur} Bed`}
              </Text>
            </Flex>
            <Flex alignItems="center" columnGap={2}>
              <MdOutlineBathtub className="w-5 h-w-5 text-palete-1" />
              <Text className="text-palete-1 font-medium ">
                {`${property.fasilitas.kamar_mandi} Bath`}
              </Text>
            </Flex>
            <Flex alignItems="center" columnGap={2}>
              <FaCar className="w-5 h-w-5 text-palete-1" />
              <Text className="text-palete-1 font-medium ">
                {`${
                  property.fasilitas.parkir_kendaraan
                    ? property.fasilitas.parkir_kendaraan
                    : "no"
                } Parking`}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </CardFooter>
    </Card>
  );
}
