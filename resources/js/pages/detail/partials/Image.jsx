import { css, styled } from "@/root/stitches.config";

import ComingSoon from "@/assets/misc/coming-soon.webp";
import Frame from "@/assets/activities/frame.webp";

const BaseImageInner = styled("img", {
    height: "67%",
    width: "44%",
    objectFit: "contain",
    objectPosition: "center",
    textAlign: "center",
    position: "absolute",
    top: "57%",
    left: "50%",
    translate: "-50% -50%",
    lineHeight: 10,
    fontSize: 30
});

const BaseImageOuter = styled("span", {
    display: "flex",
    position: "relative",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 350,
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
    defaultVariants: {
        frame: "activity",
    },
});

export default function Image({ src = null, type, ...props }) {
    return (
        <div className={css({ position: "relative", height: "min-content" }).toString()}>
            <BaseImageOuter frame={type} />
                {src ? (
                    <BaseImageInner src={src} alt={"Failed to load"} {...props} />
                ) : (
                    <img
                        className={css({
                            height: 300,
                            width: 200,
                            objectFit: "contain",
                            objectPosition: "center",
                            position: "absolute",
                            top: "51%",
                            left: "50%",
                            translate: "-50% -50%",
                            lineHeight: 10,
                            fontSize: 30
                        }).toString()}
                        src={ComingSoon}
                        alt="Image for this activity will be released soon"
                    />
                )}
        </div>
    );
}
