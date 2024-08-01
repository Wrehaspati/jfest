import { Head } from "@inertiajs/react";

export function generateMetadata(metadata = {}) {
    return (
        <Head>
            {Object.entries(metadata).map(([key, value]) => {
                if (key.toLowerCase() === "title") {
                    return <title key={key}>{value}</title>;
                }

                return <meta key={key} name={key} content={value} />;
            })}
        </Head>
    );
}
