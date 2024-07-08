import { styled } from "@/root/stitches.config";

import { Button } from "@/components/button";
import { Text } from "@/components/text";

const Container = styled("div", {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1.5rem",
    border: "1.5px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
});

export default function DetailCard({ fee, totalPrice, redirectToPaymentUrl }) {
    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                <Text css={{ fontSize: "2rem", color:"$dark", overflow: "hidden" }}>Detail</Text>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        listStyleType: "none",
                    }}
                >
                    <li
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Text
                            css={{
                                fontSize: "1.25rem",
                                color: "$dark",
                            }}
                        >
                            Subtotal
                        </Text>
                        <Text css={{ fontSize: "1.25rem", color: "$dark", overflow: "hidden" }}>
                            Rp {totalPrice.toLocaleString("id-ID")}
                        </Text>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Text
                            css={{
                                fontSize: "1.25rem",
                                color: "$dark",
                            }}
                        >
                            Admin Fee
                        </Text>
                        <Text css={{ fontSize: "1.25rem", color: "$dark", overflow: "hidden" }}>
                            Rp {fee.toLocaleString("id-ID")}
                        </Text>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            marginTop: "0.5rem",
                        }}
                    >
                        <Text
                            css={{
                                fontSize: "1.25rem",
                                color: "$dark",
                            }}
                        >
                            Grand Total
                        </Text>
                        <Text css={{ fontSize: "1.25rem", color: "$dark", overflow: "hidden" }}>
                            Rp {(totalPrice + fee).toLocaleString("id-ID")}
                        </Text>
                    </li>
                </ul>
            </div>
            <Button as="a" href={redirectToPaymentUrl} fullWidth>
                Continue To Payment
            </Button>
        </Container>
    );
}
