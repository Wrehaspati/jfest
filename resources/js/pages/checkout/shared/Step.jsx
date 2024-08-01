import { styled } from "@/root/stitches.config";

import BgStepLight from "@/assets/icons/bg-step-light.svg";
import BgStepDark from "@/assets/icons/bg-step-dark.svg";

const BaseStep = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "$dark",
    fontSize: "0.8rem",
    "& > span": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 25,
        fontSize: "1rem",
        backgroundImage: `url("${BgStepLight}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    },
    variants: {
        isActive: {
            true: {
                color: "$secondary",
                "& > span": { backgroundImage: `url("${BgStepLight}")` },
            },
        },
    },
});

export default function Step({ children, isActive = false }) {
    return <BaseStep isActive={isActive}>{children}</BaseStep>;
}
