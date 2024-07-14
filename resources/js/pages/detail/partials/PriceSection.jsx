import { css } from "@/root/stitches.config";

import { Button } from "@/components/button";
import { Text } from "@/components/text";

import { ReactComponent as Dollar } from "@/assets/icons/dollar-dark.svg";

export default function PriceSection({
    price,
    priceTag,
    isActivity,
    isStillOpened,
    isTicketsAvailable,
    isGoingOn,
    guideBook,
    orderUrl,
}) {
    return (
        <section
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
            <Text css={{ display: "flex", gap: "1rem", alignItems: "center", color: "$dark" }}>
                <Dollar />
                <span>{isActivity ? "Price" : "Registration Fee"}</span>
            </Text>
            <Text
                css={{
                    color: "$dark", overflow: "hidden"
                }}>
                Rp {price.toLocaleString("id-ID")} {priceTag && `(${priceTag})`}
            </Text>
            <div className={css({ display: "flex", gap: "1.25rem", flexDirection: "column", "@desktop": { flexDirection: "row" } }).toString()}>
                {(isActivity && !isTicketsAvailable) || (isActivity && !isGoingOn) ? (
                    <div
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "max-content",
                            padding: "0rem 0rem",
                            height: "$button-desktop-height",
                            "@laptop": {
                                height: "$button-laptop-height",
                            },
                            "@tablet": {
                                height: "$button-tablet-height",
                            },
                            "@mobile": {
                                height: "$button-mobile-height",
                            },
                        }).toString()}
                    >
                        <Text css={{ color: "$secondary", overflow: "hidden" }}>{isGoingOn ? "Sold Out" : "Event Ended"}</Text>
                    </div>
                ) : !isActivity && isStillOpened ? (
                    <div
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "max-content",
                            height: "$button-desktop-height",
                            "@laptop": {
                                height: "$button-laptop-height",
                            },
                            "@tablet": {
                                height: "$button-tablet-height",
                            },
                            "@mobile": {
                                height: "$button-mobile-height",
                            },
                        }).toString()}
                    >
                        <Text css={{ color: "$secondary" }}>Registration Closed</Text>
                    </div>
                ) : (
                    <Button
                        css={{ "@mobile": { width: "100%" } }}
                        as="a"
                        href={orderUrl}
                    >
                        {isActivity ? "Order Now" : "Register Now"}
                    </Button>
                )}
                {guideBook ?
                    <Button
                        css={{ "@mobile": { width: "100%" } }}
                        as="a"
                        href={guideBook}
                        target="_blank"
                    >
                        Download Guide Book
                    </Button>
                    : (<></>)}
            </div>
        </section>
    );
}
