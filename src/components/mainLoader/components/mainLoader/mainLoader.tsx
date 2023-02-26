import React, { FC, useEffect, useState } from "react";
import { TLoaderProps } from "./types";
import { css, Fade, Grow, keyframes, Stack, Zoom } from "@mui/material";
import { LoaderLetter } from "../loaderLetter/loaderLetter";
import { MAIN_LOADER_TEXT } from "./constants";
import { theme } from "../../../../styles/theme";

export const MainLoader: FC<TLoaderProps> = ({
    loading
}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                setShow(false);
            }, 2800);
        }
    }, [loading]);

    return <Stack alignItems={'center'} justifyContent={'center'}>
        <Fade in={show} timeout={300}>
            <Stack direction={'row'} sx={!show ? fadeStyle : null}>
                {
                    MAIN_LOADER_TEXT.split('').map((letter, idx) => (
                        <LoaderLetter
                            key={idx}
                            letter={letter}
                            loading={loading}
                        />
                    ))
                }
            </Stack>
        </Fade>
    </Stack>
}

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const fadeStyle = {
    animation: `${scaleAnimation} 0.3s ${theme.transitions.easing.easeInOut}`
};