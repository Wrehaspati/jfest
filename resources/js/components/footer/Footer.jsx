import { styled } from "@/root/stitches.config";

import topMobile from "../../assets/misc/shared-land-mobile.png";
import top from "../../assets/misc/shared-land.png";

import bottomLeftMisc from "../../assets/footer/bottom-left-misc.png";
import bottomRightMisc from "../../assets/footer/bottom-right-misc.png";

import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";
import FooterBio from "./FooterBio";
import backdrop from "@/assets/misc/footer.png";

const Container = styled("footer", {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: "1rem",
    width: "100%",
    height: "fit-content",
    padding: "0rem 5%",
    paddingTop: "10rem",
    paddingBottom: "7.5rem",
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
    "@laptop": { backgroundImage: `url("${top}")` },
    "@tablet": { backgroundImage: `url("${top}")` },
    // "@mobile": { backgroundImage: `url("${topMobile}")`, paddingTop: "8rem" },
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
