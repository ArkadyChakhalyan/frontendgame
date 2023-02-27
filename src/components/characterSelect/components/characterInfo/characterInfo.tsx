import React, { FC } from "react";
import { TCharacterInfoProps } from "./types";
import { Stack, Typography } from "@mui/material";
import { theme } from "../../../../styles/theme";
import { CharacterSkills } from "../characterSkills/characterSkills";

export const CharacterInfo: FC<TCharacterInfoProps> = ({
    character
}) => {
    return (
        <Stack spacing={2} alignItems={'center'}>
            <Typography variant={'h6'}>
                {character.name}
            </Typography>
            <Typography variant={'body2'} sx={textStyle}>
                {character.description}
            </Typography>
            <CharacterSkills skills={character.skills} />
        </Stack>
    );
}

const textStyle = {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
        p: 1.5
    }
}