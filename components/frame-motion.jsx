'use client'
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { data } from "../lib/constants";
import {v4 as uuid } from 'uuid';
function framemotion() {
    return (
        <Box 
            as={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}

            suppressHydrationWarning
        >
            {
                data && data.length && data.map((item, index) => {
                    
                    return <Box as='div'
                            suppressHydrationWarning
                            key={uuid()}
                            width={'100%'}
                            justifyContent={'center'}
                        >
                        <Box as='p'>{item.name}</Box>
                            <Image src={`${item.img}.jpg`}  widows={'100%'} height={'70vh'}/>
                        </Box>
                })
            }
        </Box>
    )
}

export default framemotion