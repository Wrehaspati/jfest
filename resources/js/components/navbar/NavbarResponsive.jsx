import { Link, usePage } from "@inertiajs/react";
import { styled, css } from "@/root/stitches.config";
import { useEffect } from "react";
import { UserCardAvatar, UserCardName } from "./UserCard";

import useAuth from "@/hooks/useAuth";
import useNavbar from "@/hooks/useNavbar";

const Container = styled("nav", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "$white",
    zIndex: 99,
    variants: {
        isActive: {
            true: { display: "flex" },
        },
    },
});

const Profile = styled("div", {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 25,
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const Login = styled("a", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "$dark",
    fontFamily: "$main",
    fontSize: "2rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    outline: "none",
})

const Menu = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
});

const MenuLink = styled(Link, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "$dark",
    fontFamily: "$main",
    fontSize: "2rem",
    "&:hover": {
        color: "$secondary",
    },
    variants: {
        isActive: {
            true: { color: "$secondary" },
        },
    },
});

const LogoutButton = styled("button", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "$dark",
    fontFamily: "$main",
    fontSize: "2rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    outline: "none",
});

const CloseButton = styled("div", {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0rem 1.5rem",
    letterSpacing: 0,
    lineHeight: 1,
    fontFamily: "$main",
    fontSize: "5rem",
    color: "$dark",
});

export default function NavbarResponsive() {
    const {
        links: { navbarUrl, authUrl },
        isMobileNavbarOpened,
        toggleIsMobileNavbarOpened,
    } = useNavbar();

    const { url } = usePage();
    const { auth, isAuthenticated, revokeAuth } = useAuth();

    function handleRevokeAuth(evt) {
        evt.preventDefault();
        revokeAuth(authUrl.revoke);
    }

    useEffect(() => {
        if (isMobileNavbarOpened) toggleIsMobileNavbarOpened();
    }, [url]);

    return (
        <Container isActive={isMobileNavbarOpened}>
            <Menu>
                {navbarUrl.map((item, index) =>
                    !item.requireAuthenticated ||
                    (item.requireAuthenticated && isAuthenticated) ? (
                        <MenuLink
                            onClick={toggleIsMobileNavbarOpened}
                            key={index}
                            href={item.href}
                            isActive={url == new URL(item.href).pathname}
                        >
                            {item.label}
                        </MenuLink>
                    ) : null
                )}
                {isAuthenticated ? (
                    <LogoutButton
                        onClick={handleRevokeAuth}
                    >
                        Sign Out
                    </LogoutButton>
                ) : (
                    <Login
                        href={authUrl.attempt}
                    >
                        Sign In
                    </Login>
                )}
            </Menu>
            {isAuthenticated ? (    
                <Profile>
                    <UserCardAvatar>
                        <img src={auth.avatar} alt={`${auth.email} avatar`} />
                    </UserCardAvatar>
                    <UserCardName css={{ fontSize: "1rem", paddingLeft: "0.5rem" }}>{auth.name}</UserCardName>
                </Profile>
            ) : null}
            <CloseButton onClick={toggleIsMobileNavbarOpened}>
                &times;
            </CloseButton>
        </Container>
    );
}
