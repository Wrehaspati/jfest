import { css } from "@/root/stitches.config";

import { Button } from "@/components/button";
import { Text } from "@/components/text";

import { ReactComponent as Dollar } from "@/assets/icons/dollar-dark.svg";

export default function PriceSection({
    price,
    priceTag,
    isActivity,
    isClosed,
    isFull,
    isTicketsAvailable,
    isGoingOn,
    isComingUp,
    guideBook,
    orderUrl,
    altLink,
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
                    {isActivity ? ("TBA (to be announced)") : ("Rp"+price.toLocaleString("id-ID")+" "+(priceTag && `(${priceTag})`))}
                
            </Text>
            <div className={css({ display: "flex", gap: "1.25rem", flexDirection: "column", "@desktop": { flexDirection: "row" } }).toString()}>
                {(isActivity && !isTicketsAvailable) || (isActivity && !isGoingOn) || (isComingUp) ? (
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
                        <Text css={{ color: "$secondary", overflow: "hidden" }}>{(isComingUp) ? "Belum dibuka" :((isGoingOn) ? "Sold Out" : "Event Ended")}</Text>
                    </div>
                ) : (!isActivity && isClosed) || (!isActivity && isFull) ? (
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
                ) : (!isActivity && priceTag == "ots") ? (
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
                        <Text css={{ color: "green" }}>Offline Registration</Text>
                    </div>
                ) : (!isActivity && altLink) ? (
                    <Button 
                        href={altLink}
                        as="a"
                        target="_blank"
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
                        Daftar Disini
                    </Button>
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
