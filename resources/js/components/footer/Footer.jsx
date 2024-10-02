import { styled } from "@/root/stitches.config";

import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";
import FooterBio from "./FooterBio";
import backdrop from "@/assets/misc/footer-baru.webp";
import backdropMobile from "@/assets/misc/footer-mobile-baru.webp";

const Container = styled("footer", {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: "1rem",
    width: "100%",
    height: "fit-content",
    minHeight: "30vw",
    padding: "0rem 5%",
    paddingTop: "12.5vw",
    paddingBottom: "6.25vw",
    backgroundColor: "$dark",
    backgroundPosition: "top",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    // "&::after, &::before": { zIndex: 1 },
    // "&::after": {
    //     content: `url("${bottomRightMisc}")`,
    //     position: "absolute",
    //     right: 0,
    //     bottom: 0,
    //     display: "block",
    // },
    // "&::before": {
    //     content: `url("${bottomLeftMisc}")`,
    //     position: "absolute",
    //     left: 0,
    //     bottom: 0,
    // },
    "@desktop": { backgroundImage: `url("${backdrop}")` },
    "@laptop": { backgroundImage: `url("${backdrop}")` },
    "@tablet": { backgroundImage: `url("${backdrop}")` },
    "@mobile": { backgroundImage: `url("${backdropMobile}")`, paddingTop: "9vw", paddingBottom: "20vw" },
});

export default function Footer() {
    return (
        <Container>
            <FooterBio />
            <FooterContacts />
            <FooterSocials />
        </Container>
    );
}
