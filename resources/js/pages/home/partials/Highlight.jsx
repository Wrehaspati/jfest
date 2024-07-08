import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import examplepic from "@/assets/misc/coming-soon.png";
import picone from "@/assets/misc/card1.png";
import { css, styled } from "@/root/stitches.config";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Title } from "@/components/title";
import backdrop from "@/assets/misc/backdrop2.png";
import backdropMobile from "@/assets/misc/backdrop2-mobile.png";

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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <ul style={{ position: "absolute", bottom: "2px" }}> {dots} </ul>
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
                            <img src={picone} alt="" className={css({
                                width: "60%",
                                "@mobile": {width: "100%"}
                            }).toString()} />
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
                            <img src={examplepic} alt="" width={"40%"} />
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
                            <img src={examplepic} alt="" width={"40%"} />
                        </div>
                    </div>
                </Slider>
            </div>
            <Backdrop />
        </Container>
    );
}
