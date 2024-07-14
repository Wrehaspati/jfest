import { css, styled } from "@/root/stitches.config";

import ComingSoon from "@/assets/misc/coming-soon.png";
import Frame from "@/assets/activities/frame.png";

const BaseImageInner = styled("img", {
    display: "block",
    height: "80%",
    width: "80%",
    objectFit: "cover",
    objectPosition: "center",
    outline: "none",
    border: "none",
});

const BaseImageOuter = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 350,
    border: "none",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    variants: {
        frame: {
            activity: { backgroundImage: `url("${Frame}")` },
            competition: { backgroundImage: `url("${Frame}")` },
        },
    },
    defaultVariants: {
        frame: "activity",
    },
});

export default function Image({ src = null, type, ...props }) {
    return (
        <BaseImageOuter frame={type}>
            {src ? (
                <BaseImageInner src={src} {...props} />
            ) : (
                <img
                    className={css({
                        height: "55%",
                        width: "55%",
                        objectFit: "contain",
                        objectPosition: "center",
                    }).toString()}
                    src={ComingSoon}
                    alt="Image for this activity will be released soon"
                />
            )}
        </BaseImageOuter>
    );
}
