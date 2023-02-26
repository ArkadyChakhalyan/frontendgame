import React, { FC, useEffect, useRef, useState } from "react";
import { TLoaderLetterProps } from "./types";
import { Typography } from "@mui/material";
import { getRandomSymbol } from "./helpers/getRandomSymbol";
import { getRandomTimeout } from "./helpers/getRandomTimeout";
import { getRandomOpacity } from "./helpers/getRandomOpacity";

export const LoaderLetter: FC<TLoaderLetterProps> = ({
    letter,
    loading
}) => {
    const [symbol, setSymbol] = useState(getRandomSymbol());
    const [opacity, setOpacity] = useState(0);
    const doneRef = useRef<boolean>();
    const intervalRef = useRef<NodeJS.Timer>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (doneRef.current) return
            setSymbol(getRandomSymbol());
            setOpacity(getRandomOpacity);
        }, 150);
    }, []);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                doneRef.current = true;
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                setSymbol(letter);
                setOpacity(1);
            }, getRandomTimeout());
        }
    }, [loading]);

    return <Typography variant={'h4'} sx={{ ...style, opacity }}>
        {symbol}
    </Typography>
}

const style = {
    userSelect: 'none',
    whiteSpace: 'break-spaces',
    fontWeight: 300,
    transition: 'all 0.3s'
}