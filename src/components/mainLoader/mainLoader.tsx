import React, { FC, useEffect, useState } from "react";
import { TLoaderProps } from "./types";
import { Box, Fade, keyframes, Stack } from "@mui/material";
import { LoaderLetter } from "./components/loaderLetter/loaderLetter";
import { MAIN_LOADER_TEXT } from "./constants";
import { theme } from "../../styles/theme";
// @ts-ignore
import image from "../../media/loading_programmer_image.png";
import { grey } from "@mui/material/colors";

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

    return (
        <Fade in={show} timeout={400}>
            <Stack alignItems={'center'} justifyContent={'center'} sx={containerStyle}>
                <Stack sx={!show ? growAnimation : null} alignItems={'center'}>
                    <Box sx={imageStyle} />
                    <Stack direction={'row'} sx={{ mt: 2 }}>
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
                </Stack>
            </Stack>
        </Fade>
    );
}

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
`;

const growAnimation = {
    animation: `${scaleAnimation} 0.4s ${theme.transitions.easing.easeInOut}`
};

const imageStyle = {
    height: theme.spacing(64),
    width: theme.spacing(64),
    background: `url(${image})`,
    backgroundSize: 'cover',
    maskImage: `radial-gradient(black, black 25%, rgba(0, 0, 0, 0) 65%)`,
    [theme.breakpoints.down('sm')]: {
        height: theme.spacing(44),
        width: theme.spacing(44),
    },
};

const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: grey[900],
    zIndex: theme.zIndex.modal
};