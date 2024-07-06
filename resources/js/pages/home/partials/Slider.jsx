import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nyoba from "@/assets/misc/coming-soon.png";
import { styled } from "@/root/stitches.config";
function SimpleSlider() {
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
                    zIndex: 100,
                    borderRadius: "100%",
                }}
                onClick={onClick}
            >
                <i className="fas fa-chevron-left"></i>
            </div>
        );
    }
    const Container = styled("section", {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "$dark",
        height: "230vh",
        "@desktop": { height: "80vh" },
        "@laptop": { height: "60vh" },
        "@tablet": { height: "40vh" },
        "@mobile": { height: "20vh" },
        // [mediaOrientationLandscape]: {
        //     height: "210vh",
        // },
    });
    const settings = {
        // dots: true,
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
            <Slider {...settings}>
                <div>
                    <div
                        style={{
                            position: "relative",
                            marginLeft: "30%",
                            left: "6%",
                        }}
                    >
                        <img src={nyoba} alt="" width={"40%"} />
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            position: "relative",
                            marginLeft: "30%",
                            left: "6%",
                        }}
                    >
                        <img src={nyoba} alt="" width={"40%"} />
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            position: "relative",
                            marginLeft: "30%",
                            left: "6%",
                        }}
                    >
                        <img src={nyoba} alt="" width={"40%"} />
                    </div>
                </div>
            </Slider>
        </Container>
    );
}

export default SimpleSlider;
