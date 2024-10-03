import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comingSoon from "@/assets/misc/coming-soon-new.webp";
import firstBanner from "@/assets/tickets/new-ticket.webp";
import secondBanner from "@/assets/misc/banner-new.webp";
import secondBannerMobile from "@/assets/misc/bannermobile-new.webp";
import { css, styled } from "@/root/stitches.config";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Title } from "@/components/title";
import backdrop from "@/assets/misc/back2-baru.webp";
import backdropMobile from "@/assets/misc/back2-mobile-baru.webp";

const mediaOrientationLandscape = `@media screen and ${[
    "(max-width: 950px)",
    "(min-height: 100px)",
    "(orientation: landscape)",
].join(" and ")}`;

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

const Container = styled("section", {
    position: "relative",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "$dark",
    overflow: "hidden",
    "@desktop": { minHeight: "50vw" },
    "@laptop": { minHeight: "50vw" },
    "@tablet": { minHeight: "50vw" },
    "@mobile": { minHeight: "130vw" },
    [mediaOrientationLandscape]: {
        minHeight: "95vw",
    },
});

export default function Hightlight() {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "black",
                    borderRadius: "100%",
                    marginRight: "80px",
                }}
                onClick={onClick}
            />
        );
    }
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "black",
                    marginLeft: "65px",
                    zIndex: 2,
                    borderRadius: "100%",
                }}
                onClick={onClick}
            >
                <i className="fas fa-chevron-left"></i>
            </div>
        );
    }
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    nextArrow: "",
                    prevArrow: "",
                    infinite: true,
                    // dots: true,
                },
            },
        ],
        appendDots: (dots) => (
            <ul
                style={{
                    position: "absolute",
                    bottom: "-28px",
                }}
            >
                <div
                    style={{
                        color: "white",
                    }}
                >
                    {dots}
                </div>
            </ul>
        ),
    };
    return (
        <Container>
            <div
                className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "28vw",
                    gap: "2rem",
                    zIndex: 1,
                    "@mobile": {
                        paddingBottom: "50vw",
                    }
                }).toString()}
            >
                <Title
                    css={{
                        textAlign: "center",
                        fontSize: "3.5vw",
                        "@mobile": { fontSize: "7.8vw" },
                    }}
                    color="light"
                >
                    Highlight
                </Title>
                <Divider />
                <Slider {...settings} style={{ width: "100%", zIndex: "4" }}>
                    <div>
                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={ firstBanner }
                                alt=""
                                className={css({
                                    width: "80%",
                                    "@mobile": { width: "95%" },
                                }).toString()}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className={css({
                                    width: "80%",
                                    height: "25vw",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundImage: `url("${secondBanner}")`,
                                    "@mobile": { 
                                        width: "95%", 
                                        height: "50vw", 
                                        backgroundImage: `url("${secondBannerMobile}")`,
                                    }
                                }).toString()}>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={comingSoon}
                                alt=""
                                className={css({
                                    width: "40%",
                                    "@mobile": { width: "60%" },
                                }).toString()}
                            />
                        </div>
                    </div>
                </Slider>
            </div>
            <Backdrop />
        </Container>
    );
}
