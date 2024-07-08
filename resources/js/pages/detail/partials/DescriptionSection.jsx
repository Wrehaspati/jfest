import { Text } from "@/components/text";

import { ReactComponent as Dollar } from "@/assets/icons/dollar-dark.svg";

export default function DescriptionSection({ description }) {
    return (
        <section
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
            <Text css={{ display: "flex", gap: "1rem", alignItems: "center", color: "$dark", overflow: "hidden" }}>
                <Dollar />
                Description
            </Text>
            <Text css={{ color: "$dark" }}>
                {description}
            </Text>
        </section>
    );
}
