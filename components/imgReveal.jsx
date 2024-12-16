'use client'
import { Box, Flex } from "@chakra-ui/react";
import { data } from "../lib/constants";
import { v4 as uuid } from "uuid";
import ImageBox from "./mainScreen";
function ImgReveal() {
    
    return (
        <Box>
            <Box width={'80%'} marginRight={'auto'}>
                {data && data.length > 0 && data.map((item, index) => <ImageBox key={uuid()} {...item} index={index}/>)}
            </Box>
        </Box>
    );
}

export default ImgReveal;
