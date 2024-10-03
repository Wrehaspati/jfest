import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { css, styled } from "@/root/stitches.config";

import useAuth from "@/hooks/useAuth";
import useNavbar from "@/hooks/useNavbar";

import { Button } from "@/components/button";
import { Grid } from "@/components/grid";
import { Divider } from "@/components/divider";
import { Title } from "@/components/title";
import { Text } from "@/components/text";

import ComingSoon from "@/assets/misc/coming-soon-new.webp";
import Frame from "@/assets/activities/frame.webp";
import { ReactComponent as TagBlue } from "@/assets/activities/tag-blue.svg";
import { ReactComponent as TagOrange } from "@/assets/activities/tag-orange.svg";
import { useCallback, useState } from "react";

const Container = styled("section", {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2.5rem",
    padding: "3rem 5%",
    backgroundColor: "$white",
});

const Activity = styled("article", {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
});

const DisabledBtn = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "$button-desktop-height",
    border: "$secondary 0.3vw solid",
    borderRadius: "0.5rem",
    "@laptop": {
        height: "$button-laptop-height",
    },
    "@tablet": {
        height: "$button-tablet-height",
    },
    "@mobile": {
        height: "$button-mobile-height",
    },
});

const ActivityImage = styled("span", {
    display: "flex",
    position: "relative",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "18.2292vw",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    variants: {
        frame: {
            activity: {
                backgroundImage: `url("${Frame}")`,
            },
            competition: {
                backgroundImage: `url("${Frame}")`,
            },
        },
    },
    "@tablet": {
        height: "35vw",
    },
    "@mobile": {
        height: "72vw"
    }
});

const ActivityBody = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0",
    "@tablet": { padding: "0 1rem" },
    "@mobile": { padding: "0 1rem" },
});

const ActivityTag = styled("div", {
    display: "flex",
    gap: "0.5rem",
    variants: {
        tag: {
            activity: { color: "$tertiary" },
            competition: { color: "$secondary" },
        },
    },
});

export default function Activities({ activities, competitions }) {
    const [acts] = useState([...activities, ...competitions]);
    const [filteredActs, setFilteredActs] = useState(acts);

    const { isAuthenticated } = useAuth();
    const {
        links: { authUrl },
    } = useNavbar();

    const handleFilterActs = useCallback((filterBy) => {
        setFilteredActs(
            filteredActs.filter(function (act) {
                if (filterBy === "all") return true;
                return act.type.toLowerCase() === filterBy;
            })
        );
    }, []);

    async function handleRedirectToOrderPage(orderUrl) {
        if (isAuthenticated) {
            return router.visit(orderUrl);
        }

        const response = await axios.get(authUrl.attempt);

        if (response.status === 200) {
            return window.location.replace(response.data.meta.redirectUrl);
        }
    }

    return (
        <Container>
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <Title
                    css={{ textAlign: "center", fontSize: "3.5vw", "@mobile": { fontSize: "7.8vw" } }}
                // color="light"
                >
                    Activities
                </Title>
                <Divider color="dark" css={{ marginBottom: "1rem" }} />
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        width: "100%",
                        "@mobile": { flexDirection: "column" },
                    }).toString()}
                >
                    <Button
                        // color="light"
                        onClick={() => handleFilterActs("all")}
                        fullWidth
                    >
                        Alls
                    </Button>
                    <Button
                        // color="light"
                        onClick={() => handleFilterActs("activity")}
                        fullWidth
                    >
                        Activities
                    </Button>
                    <Button
                        // color="light"
                        onClick={() => handleFilterActs("competition")}
                        fullWidth
                    >
                        Competitions
                    </Button>
                </div>
            </header>
            <Grid
                cols={3}
                css={{
                    color: "$white",
                    borderTop: "0.2vw solid $primary",
                    padding: "2rem 0",
                }}
            >
                {filteredActs.map((activity) => {
                    const isActivity = activity.type.toLowerCase() === "activity";
                    const uniqueKey = uuidv4();
                    return (
                        <Link
                            key={uniqueKey}
                            href={activity.details_url}
                            style={{ textDecoration: "none" }}
                        >
                            <Activity>
                                <div className={css({ position: "relative" }).toString()}>
                                    <ActivityImage frame={activity.type} />
                                    {activity.image_url ? (
                                        <img
                                            className={css({
                                                height: "67%",
                                                width: "44%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                                textAlign: "center",
                                                position: "absolute",
                                                top: "57%",
                                                left: "50%",
                                                translate: "-50% -50%",
                                                lineHeight: "16vw",
                                                fontSize: "1vw",
                                                "@tablet": {
                                                    width: "60%"
                                                },
                                                "@mobile": {
                                                    width: "65%"
                                                }
                                            }).toString()}
                                            src={activity.image_url}
                                            alt="Failed to load"
                                        />
                                    ) : (
                                        <img
                                            className={css({
                                                height: "50%",
                                                width: "40%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                                textAlign: "center",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                translate: "-50% -50%",
                                                lineHeight: "16vw",
                                                fontSize: "1vw",
                                                "@tablet": {
                                                    width: "55%"
                                                },
                                                "@mobile": {
                                                    width: "60%"
                                                }
                                            }).toString()}
                                            src={ComingSoon}
                                            alt="Coming soon"
                                        />
                                    )}
                                </div>
                                <ActivityBody>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text css={{ color: "$dark" }} className={css({
                                            wordBreak: "keep-all",
                                            fontSize: "1.2vw",
                                            overflow: "hidden",
                                            width: "70%",
                                            padding: "0.1vw 0",
                                            "@mobile": { width: "60%", fontSize: "1.2rem" },
                                            "@tablet": { fontSize: "2vw" }
                                        }).toString()}>
                                            {activity.name}
                                        </Text>
                                        <ActivityTag tag={activity.type} css={{ alignItems: "center" }}>
                                            {isActivity ? (
                                                <TagBlue width={12.5} />
                                            ) : (
                                                <TagOrange width={12.5} />
                                            )}
                                            <Text
                                                css={{
                                                    fontSize: "1rem",
                                                    color: isActivity
                                                        ? "$dark"
                                                        : "$secondary"
                                                }}
                                            >
                                                {activity.type}
                                            </Text>
                                        </ActivityTag>
                                    </div>
                                    <Text
                                        css={{
                                            color: "$dark",
                                        }}
                                        className={css({ wordBreak: "keep-all", overflow: "hidden" }).toString()}
                                    >
                                        {!isActivity
                                            ? "Rp " +activity.price.toLocaleString("id-ID")
                                            : (isActivity && (activity.sale.name))}
                                    </Text>
                                </ActivityBody>
                                {(isActivity && !activity.sale.is_tickets_available) || (isActivity && !activity.is_going_on) ? (
                                    <DisabledBtn>
                                        <Text css={{ color: "$secondary" }}>
                                            {activity.is_going_on ? "Sold Out" : "Event Ended"}
                                        </Text>
                                    </DisabledBtn>
                                ) : (!isActivity && activity.is_closed) || (!isActivity && activity.is_quota_full) ? (
                                    <DisabledBtn>
                                        <Text css={{ color: "$secondary" }}>
                                            Registration Closed
                                        </Text>
                                    </DisabledBtn>
                                ) : (isActivity && activity.is_coming_up) || (!isActivity && activity.is_opened) ? (
                                    <DisabledBtn css={{ borderColor: "$dark" }}>
                                        <Text css={{ color: "$dark" }}>
                                            Belum dibuka
                                        </Text>
                                    </DisabledBtn>
                                ) : (!isActivity && activity.price_tag == "ots") ? (
                                    <DisabledBtn css={{ borderColor: "$dark" }}>
                                        <Text css={{ color: "$dark" }}>
                                            Offline Registration
                                        </Text>
                                    </DisabledBtn>
                                ) : (
                                    <div
                                        onClick={(evt) => {
                                            evt.preventDefault();
                                            handleRedirectToOrderPage(
                                                activity.order_url
                                            );
                                            useLayoutEffect(() => {
                                                window.scrollTo(0, 0)
                                            });
                                        }}
                                    >
                                        <Button
                                            fullWidth>
                                            {isActivity
                                                ? "Order Now"
                                                : "Register Now"}
                                        </Button>
                                    </div>
                                )}
                            </Activity>
                        </Link>
                    );
                })}
            </Grid>
        </Container>
    );
}
