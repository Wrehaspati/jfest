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
                <span>Order</span>
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        color: isActivity ? "$dark" : "$secondary",
                        overflow: "hidden"
                    }).toString()}
                >
                    {isActivity ? <TagBlue /> : <TagOrange />}
                    <span>{data.type}</span>
                </div>
            </Text>
            <Text
                css={{
                    "@desktop": { fontSize: "4rem" },
                    "@laptop": { fontSize: "3rem" },
                    "@tablet": { fontSize: "3rem" },
                    "@mobile": { fontSize: "2rem" },
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
