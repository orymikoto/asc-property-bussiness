import { T_Comment } from "@/types/Model";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {
  comment: T_Comment;
};

export default function CommentCard({ comment }: Props) {
  return (
    <Card maxW="md" h="100%" rounded={16} p={6}>
      <CardBody>
        <Stack spacing={2} rowGap={4}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 24.00 24.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4b73ff"
            stroke="#4b73ff"
            strokeWidth="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.048"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z" />{" "}
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />{" "}
              </g>{" "}
            </g>
          </svg>
          <Text textAlign={"left"} className="text-neutral-400 line-clamp-3">
            {comment.komentar}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex gap={4} alignItems={"center"}>
          <Image
            src={
              comment.foto_profil
                ? comment.foto_profil
                : "/image/image-not-found.jpg"
            }
            width={64}
            height={64}
            alt={`Profile picture of ${comment.nama}`}
            className="w-16 h-16 rounded-full overflow-hidden object-cover"
          />
          <Stack gap={0}>
            <Text textAlign={"left"} className="font-bold">
              {comment.nama}
            </Text>
            <Text textAlign={"left"} className="text-neutral-400">
              {comment.pekerjaan}
            </Text>
          </Stack>
        </Flex>
      </CardFooter>
    </Card>
  );
}
