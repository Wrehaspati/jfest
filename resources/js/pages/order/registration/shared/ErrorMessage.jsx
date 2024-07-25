import { Text } from "@/components/text";

export default function ErrorMessage({ msg }) {
    return <Text css={{ fontSize: "1rem", color: "#ff3333", "@mobile": {fontSize: "0.7rem"} }}>{msg}</Text>;
}
