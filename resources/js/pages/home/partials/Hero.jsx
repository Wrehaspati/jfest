import { css, styled } from "@/root/stitches.config";
import { Link } from "@inertiajs/react";

import { Button } from "@/components/button";

import useNavbar from "@/hooks/useNavbar";
import backdrop from "@/assets/misc/backdropnew.webp";
import backdropMobile from "@/assets/misc/backdrop-mobile.webp";

const mediaOrientationLandscape = `@media screen and ${[
    "(max-width: 950px)",
    "(min-height: 100px)",
    "(orientation: landscape)",
].join(" and ")}`;

const Container = styled("section", {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "$dark",
    height: "64vw",
    overflow: "hidden",
    "@desktop": { height: "55vw" },
    "@laptop": { height: "55vw" },
    "@tablet": { height: "55vw" },
    "@mobile": { height: "95vw" },
    [mediaOrientationLandscape]: {
        height: "95vw",
    },
});

const Backdrop = styled("div", {
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "block",
    width: "100%",
    height: "100%",
    backgroundSize: "100%, auto",
    backgroundPositionX: "center",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
    "@desktop": { backgroundImage: `url("${backdrop}")` },
    "@laptop": { backgroundImage: `url("${backdrop}")` },
    "@tablet": { backgroundImage: `url("${backdrop}")` },
    "@mobile": { backgroundImage: `url("${backdropMobile}")` },
});

export default function Hero() {
    const {
        links: { orderTicketUrl },
    } = useNavbar();

    return (
        <Container>
            <Backdrop />
            <Button as="a" color="light" href={orderTicketUrl} css={{ position: "absolute" }} className={ css({
                bottom: "10vw",
                width: "12vw",
                "@laptop": { 
                    bottom: "9vw", 
                },
                "@tablet": { 
                    bottom: "4vw",
                },
                "@mobile": { 
                    bottom: "12vw",
                },
                zIndex: "2",
            }).toString()}>
                Buy Ticket
            </Button>
        </Container>
    );
}
