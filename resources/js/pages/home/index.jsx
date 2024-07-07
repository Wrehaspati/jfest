import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { generateMetadata } from "@/utils/helper";

import Hero from "./partials/Hero";
import Hightlight from "./partials/Highlight";
import Activities from "./partials/Activities";

import withNavbarMobile from "@/hooks/hoc/withNavbarMobile";

function HomePage({ activities, competitions, meta }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) return toast(flash.message);
    }, [flash]);

    return (
        <>
            {generateMetadata(meta.head)}
            <Hero />
            <Hightlight />
            <Activities activities={activities} competitions={competitions} />
        </>
    );
}

export default withNavbarMobile(HomePage);
