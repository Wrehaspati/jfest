import { css, styled } from "@/root/stitches.config";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Title } from "@/components/title";

const mediaOrientationLandscape = `@media screen and ${[
    "(max-width: 950px)",
    "(min-height: 100px)",
    "(orientation: landscape)",
].join(" and ")}`;

const Container = styled("section", {
    position: "relative",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "$dark",
    overflow: "hidden",
    "@desktop": { height: "30vh" },
    "@laptop": { height: "25vh" },
    "@tablet": { height: "20vh" },
    "@mobile": { height: "15vh" },
    [mediaOrientationLandscape]: {
        height: "210vh",
    },
});

export default function Hightlight() {
    return (
        <Container>
            <div
                className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "10rem",
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
            </div>

            {/* <img src={} alt={"obake-pics"} /> */}
        </Container>
    );
}
