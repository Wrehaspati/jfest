import { css, styled } from "@/root/stitches.config";
import { Title } from "../title";

// import { ReactComponent as FacebookIcon } from "@/assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "@/assets/icons/instagram.svg";
import { ReactComponent as TiktokIcon } from "@/assets/icons/tiktok.svg";

const socials = [
    {
        id: 1,
        label: "@jfestbali",
        href: "https://instagram.com/jfestbali",
        Icon: InstagramIcon,
    },
    {
        id: 2,
        label: "@jfest.bali",
        href: "https://www.tiktok.com/@jfest.bali?lang=id-ID",
        Icon: TiktokIcon,
    },
];

const SocialLink = styled("a", {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
    color: "$white",
    fontFamily: "$main",
    fontSize: "1rem",
    letterSpacing: 2,
    textDecoration: "none",
    textDecorationColor: "transparent",
    "&:hover": {
        textDecoration: "underline",
        textDecorationColor: "$white",
    },
    "& > svg": {
        width: "1.45rem",
    },
});

export default function FooterSocials() {
    return (
        <section
            className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gridColumn: "11 / -1",
                paddingTop: "5rem",
                gap: "1.5rem",
                zIndex: 2,
                "@tablet": { gridColumn: "7 / -1", paddingTop: "1.5rem" },
                "@mobile": { gridColumn: "1 / -1", paddingTop: "1.5rem" },
            }).toString()}
        >
            <Title order={2} css={{ fontSize: "1.25rem", color: "$white" }}>
                Social Media
            </Title>
            <div
                className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                }).toString()}
            >
                {socials.map((social) => (
                    <SocialLink key={social.id} href={social.href} target="_blank">
                        <social.Icon />
                        <span>{social.label}</span>
                    </SocialLink>
                ))}
            </div>
        </section>
    );
}
