import { styled } from "@/root/stitches.config";

const BaseTextInput = styled("input", {
    display: "block",
    fontFamily: "$main",
    fontSize: "1vw",
    padding: "1rem 0rem",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.2)",
    outline: "none",
    color: "$dark",
    letterSpacing: 0,
    "&:placeholder": {
        color: "rgba(0, 0, 0, 0.5)",
    },
    "@mobile": {fontSize: "3vw"}
});

export default function TextInput({ ...props }) {
    return <BaseTextInput {...props} />;
}
