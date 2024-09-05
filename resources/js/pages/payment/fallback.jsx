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
                <Title css={{ color: "$dark" }} order={4}>Terima Kasih!</Title>
                <Text css={{ color: "$dark" }}>
                    Transaksi sedang diproses, silahkan menunggu email konfirmasi selanjutnya dari kami. <br/> Setelah berhasil, informasi transaksi dan ticket dapat diunduh pada halaman 'History'
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
                    ID Order: {data.orderId}
                </Text>
                <Text
                    css={{
                        color: "$secondary",
                        fontSize: "1rem",
                    }}
                >
                    * Mohon jangan menghapus item pada halaman 'My Orders' jika transaksi belum dinyatakan selesai. <br/><br/> Hubungi contact person jika belum menerima email konfirmasi dalam jangka waktu 1 jam setelah transaksi dilakukan.
                </Text>
            </div>
        </>
    );
}

export default withNavbarMobile(PaymentFallback);
