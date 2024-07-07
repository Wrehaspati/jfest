import { css, styled } from "@/root/stitches.config";
import { Link } from "@inertiajs/react";

import { Button } from "@/components/button";

import useNavbar from "@/hooks/useNavbar";
import backdrop from "@/assets/misc/backdrop.png";

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
    backgroundColor: "$white",
    height: "64vw",
    overflow: "hidden",
    "@desktop": { height: "55vw" },
    "@laptop": { height: "60vw" },
    "@tablet": { height: "60vw" },
    "@mobile": { height: "100vw" },
    [mediaOrientationLandscape]: {
        height: "210vh",
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
    // "@mobile": { backgroundImage: `url("${backdropMobile}")` },
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
                    bottom: "4vw", 
                },
                "@tablet": { 
                    bottom: "4vw",
                },
                "@mobile": { 
                    bottom: "0",
                },
                zIndex: "2",
            }).toString()}>
                Buy Ticket
            </Button>
        </Container>
    );
}
