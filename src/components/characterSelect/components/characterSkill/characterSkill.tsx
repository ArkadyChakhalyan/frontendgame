import React, { FC } from "react";
import { TCharacterSkillProps } from "./types";
import { alpha, Box, Stack, Typography } from "@mui/material";
import { theme } from "../../../../styles/theme";

export const CharacterSkill: FC<TCharacterSkillProps> = ({
    title,
    value
}) => {
    return (
        <Stack
            spacing={2}
            direction={'row'}
            sx={containerStyle}
        >
            <Typography sx={textStyle} variant={'body2'}>
                {title}
            </Typography>
            <Box sx={valueContainerStyle}>
                <Box sx={{ ...valueStyle, width: `${100 * (value / 5)}%` }} />
            </Box>
        </Stack>
    );
}

const containerStyle = {
    mt: 2,
    alignItems: 'center'
}

const textStyle = {
    minWidth: theme.spacing(14),
    '&:first-letter': {
        textTransform: 'uppercase'
    }
}

const valueContainerStyle = {
    position: 'relative',
    width: theme.spacing(20),
    height: theme.spacing(),
    borderRadius: theme.spacing(0.5),
    background: alpha(theme.palette.primary.main, 0.3),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(18)
    }
}

const valueStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 1,
    background: theme.palette.primary.main,
}