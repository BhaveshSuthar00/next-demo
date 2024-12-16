"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { theme } from '@chakra-ui/theme';
import { ThemeProvider } from "@emotion/react";
import Header from "../../components/header";
import Template from "./template";

// Define your custom theme
const customTheme = createSystem(defaultConfig, {
    theme : {
        tokens : {
            colors: {
                // Add custom background colors or any other colors
                brand: {
                    50: { value: "#e6f2ff" },
                    100: { value: "#e6f2ff" },
                    200: { value: "#bfdeff" },
                    300: { value: "#99caff" },
                    400: { value: "#66b3ff" },
                    500: { value: "#3399ff" },
                    600: { value: "#0077e6" },
                    700: { value: "#0059b3" },
                    800: { value: "#003a80" },
                    900: { value: "#001d4d" },
                },
            },
        },
        semanticTokens: {
            colors: {
                brand: {
                    solid: { value: "{colors.brand.500}" },
                    contrast: { value: "{colors.brand.100}" },
                    fg: { value: "{colors.brand.700}" },
                    muted: { value: "{colors.brand.100}" },
                    subtle: { value: "{colors.brand.200}" },
                    emphasized: { value: "{colors.brand.300}" },
                    focusRing: { value: "{colors.brand.500}" },
                },
            },
        },
        fonts: {
            // Add custom fonts
            body: "Inter, sans-serif",
            heading: "Poppins, sans-serif",
            mono: "Menlo, monospace",
        },
        breakpoints: {
            // Add custom breakpoints
            base: "0px",
            xs: "360px",
            sm: "460px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1536px",
        },
        styles: {
            global: {
                // Global styles
                body: {
                    bg: "background.default",
                    color: "gray.800",
                    fontFamily: "body",
                },
                "*": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                },
            },
        },
    },
});

function ChakraProviderLocal({ children }) {
    return <>
        {/* <ThemeProvider attribute='class' initialColorMode={theme.config.initialColorMode} disableTransitionOnChange/> */}
        <ChakraProvider value={customTheme}>
            <Header />
            {/* <Template> */}
                {children}
            {/* </Template> */}
        </ChakraProvider>
    </>
}
export default ChakraProviderLocal;