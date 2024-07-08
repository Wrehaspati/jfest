import { Link } from "@inertiajs/react";

import { css } from "@/root/stitches.config";
import { generateMetadata } from "@/utils/helper";

import withNavbarMobile from "@/hooks/hoc/withNavbarMobile";

import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Title } from "@/components/title";

function PaymentFallback({ data, links: { historyPageUrl }, meta }) {
    return (
        <>
            {generateMetadata(meta.head)}
            <div
                className={css({
                    display: "grid",
                    placeContent: "center",
                    height: "100vh",
                    width: "100%",
                    padding: "0rem 5%",
                    backgroundColor: "$white",
                    textAlign: "center",
                    gap: "1rem",
                }).toString()}
            >
                <Title css={{ color: "$dark" }} order={4}>Thanks For Your Payment</Title>
                <Text css={{ color: "$dark" }}>
                    Your payment was received by us. Lets go check it now!
                </Text>
                <Link href={historyPageUrl} style={{ textDecoration: "none" }}>
                    <Button
                        // color="light"
                        css={{ margin: "0 auto", marginTop: "1rem" }}
                    >
                        To History
                    </Button>
                </Link>
                <Text
                    css={{
                        color: "$dark",
                        marginTop: "1rem",
                    }}
                >
                    Your Order Id: {data.orderId}
                </Text>
            </div>
        </>
    );
}

export default withNavbarMobile(PaymentFallback);
