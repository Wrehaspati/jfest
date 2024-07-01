import { createInertiaApp } from "@inertiajs/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { globalCss } from "@/root/stitches.config";

import { AuthProvider } from "@/providers/AuthProvider";
import { NavbarProvider } from "@/providers/NavbarProvider";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import batangas from "@/assets/fonts/batangas.otf";
import go3 from "@/assets/fonts/go3v2.ttf";

import "react-toastify/dist/ReactToastify.css";

const globalStyles = globalCss({
    "@font-face": [
        { fontFamily: "batangas", src: `url("${batangas}")` },
        { fontFamily: "go3", src: `url("${go3}")` },
    ],
    "*, html": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        scrollBehavior: "smooth",
        overflowX: "hidden",
    },
    body: {
        fontFamily: "$main",
        fontSize: "$main",
        letterSpacing: 1.1,
    },
});

function Wrapper({ children, links, auth }) {
    globalStyles();

    return (
        <AuthProvider auth={auth}>
            <NavbarProvider links={links}>
                <Navbar />
                {children}
                <ToastContainer
                    position="top-right"
                    newestOnTop={true}
                    theme="dark"
                    pauseOnHover
                />
                <Footer />
            </NavbarProvider>
        </AuthProvider>
    );
}

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
        return pages[`./pages/${name}.jsx`];
    },
    setup: ({ App, el, props }) => {
        const pageProps = props.initialPage.props;

        createRoot(el).render(
            <StrictMode>
                <Wrapper {...pageProps}>
                    <App {...props} />
                </Wrapper>
            </StrictMode>
        );
    },
});
