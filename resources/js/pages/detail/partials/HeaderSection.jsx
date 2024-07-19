import { styled } from "@/root/stitches.config";
import React from 'react';

import { Text } from "@/components/text";

import { ReactComponent as TagBlue } from "@/assets/activities/tag-blue.svg";
import { ReactComponent as TagOrange } from "@/assets/activities/tag-orange.svg";

const Title = styled(Text, {
    fontSize: "2.5em",
});

export default function HeaderSection({ name, type, isActivity, closedDate }) {
    const date = new Date(closedDate);
    const option = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', option);
    return (
        <section
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
            <Title css={{ color: "$dark", overflow: "hidden" }}>{name}</Title>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {isActivity ? <TagBlue /> : <TagOrange />}
                <Text css={{ color: isActivity ? "$dark" : "$secondary", overflow: "hidden" }}>
                    {type}
                </Text>
                <Text css={{ color: "$dark", "@mobile": {width: "60%"} }}>
                    {isActivity ? "" : " closed at "+formattedDate}
                </Text>
            </div>
        </section>
    );
}
