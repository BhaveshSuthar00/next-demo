"use client";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex bg={'black'} width={'100%'} justifyContent={'space-between'} h={50} color={'blackAlpha'}>
      <Box as={"nav"} m={'auto'}>
        <Flex as={"ul"} color={'white'} gap={4} justifyContent={"space-between"}>
          <Box as={"li"}>
            <Link href="/">Home</Link>
          </Box>
          <Box as={"li"}>
            <Link href="/about">About</Link>
          </Box>
          <Box as={"li"}>
            <Link href="/contact">Contact</Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
