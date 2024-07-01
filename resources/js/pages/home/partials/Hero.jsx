import { css, styled } from "@/root/stitches.config";
import { Link } from "@inertiajs/react";

import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Title } from "@/components/title";

import useNavbar from "@/hooks/useNavbar";

import toriGate from "@/assets/misc/tori-gate.svg";
import burung from "@/assets/misc/burung.png";
import ground from "@/assets/misc/ground.png";
import pedang from "@/assets/misc/pedang.png";

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
    // "@desktop": { height: "155vh" },
    // "@laptop": { height: "142.5vh" },
    // "@tablet": { height: "100vh" },
    "@mobile": { height: "200vw" },
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
    // "@desktop": { backgroundImage: `url("${backdrop}")` },
    // "@laptop": { backgroundImage: `url("${backdrop}")` },
    // "@tablet": { backgroundImage: `url("${backdrop}")` },
    // "@mobile": { backgroundImage: `url("${backdropMobile}")` },
});

export default function Hero() {
    const {
        links: { orderTicketUrl },
    } = useNavbar();

    return (
        <Container>
            <Backdrop />
            <div
                className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // paddingBottom: "10rem",
                    // gap: "2rem",
                    zIndex: 1,
                }).toString()}
            >
                <img src={burung} className={css({
                    top: "6vw",
                    position: "absolute",
                    left: "15vw",
                    width: "14vw",
                    transform: "scaleX(-1)",
                    "@mobile": { top: "45vw"},
                }).toString()} alt="burung"/>

                <img src={burung} className={css({
                    top: "6vw",
                    position: "absolute",
                    right: "15vw",
                    width: "8vw",
                    "@mobile": { top: "35vw"},
                }).toString()} alt="burung"/>

                <Title css={{ 
                    textAlign: "center", 
                    fontSize: "3.75vw",
                    "@mobile": { fontSize: "7.8vw" },  
                }}>
                    Jidai no Henka
                </Title>

                <img src={toriGate} className={css({
                    height: "25vw",
                    "@mobile": { height: "50vw" },
                }).toString()} alt="tori-gate"/>

                <img src={pedang} className={css({
                    top: "33vw",
                    position: "absolute",
                    right: "44vw",
                    width: "12vw",
                    transform: "rotate(10deg)",
                    "@mobile": { 
                        top: "104vw",
                        right: "40vw",
                        width: "20vw",
                    },
                }).toString()} alt="pedang"/>

                <div className={css({
                    backgroundImage: `url(${ground})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "27vw",
                    width: "100%",
                    position: "absolute",
                    top: "44vw",
                    objectFit: "fill",
                    "@mobile": { 
                        height: "265vw",
                        width: "289%",
                        top: "29vw"
                    },
                }).toString()}></div>

                {/* <Divider />
                <Button as="a" href={orderTicketUrl}>
                    Buy Entrance Ticket
                </Button> */}
            </div>
            <div
                className={css({
                    position: "absolute",
                    bottom: "2.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    color: "$white",
                    fontFamily: "$main",
                    fontSize: "1.5em",
                    pointerEvents: "none",
                    zIndex: 1,
                    [mediaOrientationLandscape]: {
                        bottom: "3rem",
                    },
                }).toString()}
            >
                {/* <span>Scroll Down</span>
                <img
                    src={pointDown}
                    alt="Point down icon"
                    style={{ height: 25, width: 25 }}
                /> */}
            </div>
        </Container>
    );
}
