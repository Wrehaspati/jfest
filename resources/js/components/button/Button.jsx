import { css, styled } from "@/root/stitches.config";

const BaseButton = styled("button", {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    padding: "0em 2em",
    minWidth: 250,
    outline: "none",
    border: "none",
    backgroundColor: "$dark",
    fontFamily: "$main",
    letterSpacing: 2,
    cursor: "pointer",
    overflow: "hidden",
    textDecoration: "none",
    textDecorationColor: "transparent",
    borderRadius: "0.5rem",
    "&:hover": {
        color: "$secondary",
    },
    "@desktop": {
        height: "$button-desktop-height",
        fontSize: "$normal-desktop",
    },
    "@laptop": { height: "$button-laptop-height", fontSize: "$normal-laptop" },
    "@tablet": { height: "$button-tablet-height", fontSize: "$normal-tablet" },
    "@mobile": { height: "$button-mobile-height", fontSize: "$normal-mobile" },
    variants: {
        color: {
            dark: { color: "$white" },
            light: {
                color: "$dark",
                backgroundColor: "$white",
            },
        },
        fullWidth: {
            true: { width: "100%" },
        },
    },
    defaultVariants: { color: "dark" },
});

export default function Button({ color = "dark", children, ...props }) {
    return (
        <BaseButton color={color} {...props} size={{ "@mobile": "mobile" }}>
            {children}
        </BaseButton>
    );
}
