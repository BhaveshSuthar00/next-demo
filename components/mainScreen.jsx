'use client'
import { Box, chakra, Image } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
})
const ChakraTag = chakra(motion.h1, {
    shouldForwardProp: isValidMotionProp,
})
function ImageBox(item) {
    const slideInVariant = {
        odd: {
            outOfView: { opacity: 0.5, x: "-50%" }, // Animation on out of view
            initial: { opacity: 0, x: "-100%" },
            whileInView: { opacity: 1, x: 0, y : 0 },
            transition: { duration: 0.4, delay: 0.75, ease: "easeInOut" },
        },
        even: {
            outOfView: { opacity: 0.5, x: "-50%" }, // Animation on out of view
            initial: { opacity: 0, x: "50%"},
            whileInView: { opacity: 1, x: 0, y : 0 },
            transition: { duration: 0.4, delay: 0.75, ease: "easeInOut" },
        },
    };

    const variantKey = item.index % 2 == 0 ? "even" : "odd";
    const variantTag = item.index % 2 != 0 ? "even" : "odd";

    return (
        <Box marginTop={30}>
            <ChakraTag variants={slideInVariant[variantTag]} initial="initial" whileInView="whileInView" transition={{ duration: 0.4, delay: 0.80, ease: "easeInOut"}} fontSize={'2xl'} fontWeight={'bolder'} margin={'auto'} marginBottom={2} w={'70%'}>{item.name}</ChakraTag>
            <ChakraBox
                suppressHydrationWarning
                textAlign={'center'}
                width="60%"
                margin={'auto'}
                justifyContent="center"
                initial="initial"
                whileInView="whileInView"
                exit={"exit"}
                variants={slideInVariant[variantKey]}
                // viewport={{ once: true }}
                // animate={isOutOfView ? "outOfView" : "whileInView"} // Switch animation state
            >
                <Image
                    src={`${item.img}.jpg`}
                    width="100%"
                    height="70vh"
                    objectFit="cover"
                    
                />
            </ChakraBox>
        </Box>
    );
}

export default ImageBox;
