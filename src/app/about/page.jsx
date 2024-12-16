import { Box, Flex } from "@chakra-ui/react";

function about() {
    return (
        <Flex h={'90vh'}>
            <Box as='h1' fontSize={'4xl'} fontWeight={'bolder'} m={'auto'} textAlign={'center'} w={'100%'}>About page</Box>
        </Flex>
    );
}

export default about;