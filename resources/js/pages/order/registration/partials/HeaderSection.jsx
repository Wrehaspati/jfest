import { css } from "@/root/stitches.config";

import { Text } from "@/components/text";

import { ReactComponent as TagBlue } from "@/assets/activities/tag-blue.svg";
import { ReactComponent as TagOrange } from "@/assets/activities/tag-orange.svg";

export default function HeaderSection({ data, isActivity }) {
    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
            }).toString()}
        >
            <Text
                css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    "@mobile": { fontSize: "1.2rem" },
                    color: "$dark"
                }}
            >
                <span>Register</span>
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        color: isActivity ? "$tertiary" : "$secondary",
                    }).toString()}
                >
                    {isActivity ? <TagBlue /> : <TagOrange />}
                    <span>{data.type}</span>
                </div>
            </Text>
            <Text
                css={{
                    "@desktop": { fontSize: "3vw" },
                    "@laptop": { fontSize: "2.5vw" },
                    "@tablet": { fontSize: "2.5vw" },
                    "@mobile": { fontSize: "4vw" },
                    color: "$dark",
                    width: "60%",
                    textAlign: "center",
                    overflow: "clip",
                }}
            >
                {data.name}
            </Text>
        </div>
    );
}
