import { css, styled } from "@/root/stitches.config";
import { generateMetadata } from "@/utils/helper";

import withNavbarMobile from "@/hooks/hoc/withNavbarMobile";

import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Button } from "@/components/button";

import Item from "./partials/Item";
import ItemContainer from "./partials/ItemContainer";
import { useToggle } from "@uidotdev/usehooks";
import { useEffect } from "react";
import Modal from "react-modal";

const Container = styled("section", {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    minHeight: "70vh",
    padding: "2rem 5%",
    backgroundColor: "$white",
    "@desktop": { paddingTop: "9.5rem" },
    "@laptop": { paddingTop: "9rem" },
    "@tablet": { paddingTop: "8.5rem" },
    "@mobile": { paddingTop: "8rem" },
});

function HistoryPage({ data, meta, hasTicketPresale1 }) {
    const [modalVisible, setModalVisible] = useToggle(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: "3rem",
            maxWidth: "55rem",
            transform: 'translate(-50%, -50%)',
            display: "grid",
            gap: "0.5rem",
            zIndex: 4,
        },
        overlay: {
            zIndex: 4,
        }
    };

    const AnnouncementModal = () => {
        return (
            <Modal
                isOpen={modalVisible}
                onRequestClose={setModalVisible}
                contentLabel="Annoucement"
                ariaHideApp={false}
                style={customStyles}
                shouldCloseOnOverlayClick={false}
            >
                <Text className={css({ color: "$dark", fontSize: "2rem" })} ref={(subtitle) => (subtitle = subtitle)}>Pengumuman Penting</Text>
                <div className={css({
                    padding: "0 1rem",
                }).toString()}>
                    <Text className={css({ color: "$dark", padding: "1rem 0" })}>
                        Khusus untuk pembelian ticket pre-sale 1 memiliki kemungkinan untuk mendapatkan sesuatu nih! silahkan mengisi link dibawah ya!{" "}
                    </Text>
                </div>
                <Button
                    onClick={() => setModalVisible(false)}
                    css={{ 
                        width: "100%",
                        "@mobile": { width: "100%" }
                    }}
                    as="a"
                    href={"https://forms.gle/Qj1QXoDKCfGURSF68"}
                    target="_blank"
                >
                    Link Form
                </Button>
            </Modal>
        )
    }

    function checkConditionAndShowModal() {
        const condition = hasTicketPresale1;

        if (condition) {
            setModalVisible(true);
        }
    }

    useEffect(() => {
        checkConditionAndShowModal();
    }, [])


    return (
        <>
            {generateMetadata(meta.head)}
            <Container>
                <header
                    className={css({
                        display: "block",
                        width: "100%",
                        paddingBottom: "2rem",
                        borderBottom: "1.5px solid rgba(255, 255, 255, 0.05)",
                        "@mobile": { paddingBottom: "1.5rem" },
                    }).toString()}
                >
                    <Title
                        css={{
                            fontSize: "2rem",
                            letterSpacing: 1.25,
                            "@mobile": { fontSize: "1.5rem" },
                        }}
                    >
                        History
                    </Title>
                </header>
                <section
                    className={css({
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }).toString()}
                >
                    {data.map((order) => (
                        <div
                            key={order.reference}
                            className={css({
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                padding: "2rem 0rem",
                                borderBottom:
                                    "1.5px solid rgba(255, 255, 255, 0.05)",
                                "@mobile": {
                                    gap: "1.25rem",
                                    padding: "1.5rem 0rem",
                                },
                            }).toString()}
                        >
                            {modalVisible && <AnnouncementModal />}
                            <Text css={{
                                color: "$dark",
                                overflow: "hidden"
                            }}>Order: {order.reference}</Text>
                            <ItemContainer>
                                {order.tickets.map((ticket) => (
                                    <Item
                                        key={ticket.id}
                                        data={ticket}
                                        type={ticket.activity.type}
                                    />
                                ))}
                                {order.registrations.map((registration) => (
                                    <Item
                                        key={registration.id}
                                        data={registration}
                                        type={registration.competition.type}
                                    />
                                ))}
                            </ItemContainer>
                        </div>
                    ))}
                </section>
            </Container>
        </>
    );
}

export default withNavbarMobile(HistoryPage);
