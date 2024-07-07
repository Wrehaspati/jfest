import { styled } from "@/root/stitches.config";
import { ReactComponent as DividerIcon } from "@/assets/icons/divider.svg";

const BaseDivider = styled(DividerIcon, {
    display: "block",
    width: "fit-content",
    height: 10,
    objectFit: "cover",
    objectPosition: "center",
    variants: {
        color: {
            dark: { color: "$dark" },
            light: { color: "$white"},
        }
    },
    defaultVariants: { color: "$white" },
});

export default function Divider({ color='light', ...props }) {
    return <BaseDivider color={color} {...props} />;
}
