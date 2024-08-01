import { styled } from "@/root/stitches.config";

import { Text } from "@/components/text";

const Container = styled("div", {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    height: "max-content",
    marginBottom: "0.75rem",
    "@mobile": {
        flexDirection: "column",
    }
});

export default function Item({ data, type }) {
    const isActivity = type === "activity";

    return (
        <div>
            {
                (isActivity && !data.item.price && (
                    <Text
                        css={{
                            color: "green",
                            fontSize: "0.8rem", 
                            overflow: "hidden",
                        }}
                    >
                        Tiket berikut termasuk dalam syarat registrasi lomba
                    </Text>
                ))
            }
            <Container>
                <Text
                    css={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "$dark",
                        "@mobile": {
                            width: "100%",
                            justifyContent: "space-between",
                        }
                    }}
                >
                    <span>
                        {
                            data.item[isActivity ? "activity" : "competition"]
                                .name
                        }
                    </span>
                    <Text
                        css={{
                            display: "flex",
                            gap: "0.75rem",
                            fontSize: "1rem",
                            color: "$dark",
                            overflow: "hidden"
                        }}
                    >
                        <span> X </span>
                        <span>{data.count} pcs</span>
                    </Text>
                </Text>
                <Text css={{ color: "$dark", overflow: "hidden", width: "max-content" }}>
                    Rp{" "}
                    {(
                        (isActivity ? (data.item.price ?  data.item.activity.sale.price : 0) : data.item.price) * data.count
                    ).toLocaleString("id-ID")}

                </Text>
            </Container>
        </div>
    );
}
