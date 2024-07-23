import { styled } from "@/root/stitches.config";
import { ReactComponent as JFestLogo } from "@/assets/logo.svg";
import { Link } from "@inertiajs/react";
import { useWindowSize } from "@uidotdev/usehooks";

import useNavbar from "@/hooks/useNavbar";

const Logo = styled(JFestLogo, {
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
    width: 50,
});

export default function NavbarLogo() {
    const { width } = useWindowSize();
    const {
        links: { homeUrl },
    } = useNavbar();

    if (width <= 768) {
        return null;
    }

    return (
        <Link href={homeUrl}>
            {width < 768 ? 
                <Logo css={{ 
                    width: 50
                }} /> 
            : 
                <Logo />
            }
        </Link>
    );
}
