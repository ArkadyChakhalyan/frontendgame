import React, { FC } from "react";
import { TCharacterListProps } from "./types";
import { Stack } from "@mui/material";
import { theme } from "../../../../styles/theme";
import { CHARACTERS } from "../../constants";
import { CharacterAvatar } from "../characterAvatar/characterAvatar";

export const CharacterList: FC<TCharacterListProps> = ({
    selectedCharacter,
    onSelect
}) => {
    return (
        <Stack
            direction={'row'}
            sx={characterAvatarsStyle}
        >
            {
                CHARACTERS.map(character => (
                    <CharacterAvatar
                        key={character.name}
                        name={character.name}
                        avatar={character.avatar}
                        selected={character.name === selectedCharacter.name}
                        onClick={() => onSelect(character)}
                    />
                ))
            }
        </Stack>
    );
}

const characterAvatarsStyle = {
    alignItems: 'center',
    height: theme.spacing(18),
    gap: 2,
    [theme.breakpoints.down('sm')]: {
        height: theme.spacing(13)
    },
    [theme.breakpoints.down('xs')]: {
        gap: 1
    }
}