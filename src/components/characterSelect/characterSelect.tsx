import React, { FC, useState } from "react";
import { TCharacterSelectProps } from "./types";
import { Button, Stack, Typography } from "@mui/material";
import { CHARACTERS, CHARACTER_SELECT_TITLE, CHARACTER_SELECT_START_BUTTON } from "./constants";
import { theme } from "../../styles/theme";
import { CharacterList } from "./components/characterList/characterList";
import { DifficultySelect } from "./components/difficultySelect/difficultySelect";
import { CharacterInfo } from "./components/characterInfo/characterInfo";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../store/reducers/characterReducer/selectors/getCharacter";
import { characterSetAC } from "../../store/reducers/characterReducer/characterReducer";
import { difficultySetAC } from "../../store/reducers/difficultyReducer/gameDifficultyReducer";
import { TGameDifficulty } from "../../store/reducers/difficultyReducer/types";

export const CharacterSelect: FC<TCharacterSelectProps> = () => {
    const dispatch = useDispatch();

    const character = useSelector(getCharacter);

    const [selectedCharacter, setSelectedCharacter] = useState(CHARACTERS[1]);
    const [difficulty, setDifficulty] = useState<TGameDifficulty>(1);

    const onStart = () => {
        dispatch(characterSetAC(selectedCharacter));
        dispatch(difficultySetAC(difficulty));
    };

    if (character) return null;

    return (
        <Stack spacing={4} sx={containerStyle}>
            <Typography variant={'h4'} sx={titleStyle}>
                {CHARACTER_SELECT_TITLE}
            </Typography>
            <CharacterList
                selectedCharacter={selectedCharacter}
                onSelect={setSelectedCharacter}
            />
            <CharacterInfo character={selectedCharacter} />
            <DifficultySelect
                selectedDifficulty={difficulty}
                onChange={setDifficulty}
            />
            <Button
                variant={'contained'}
                size={'large'}
                fullWidth
                onClick={onStart}
            >
                {CHARACTER_SELECT_START_BUTTON}
            </Button>
        </Stack>
    );
}

const containerStyle = {
    alignItems: 'center',
    width: theme.spacing(56.75),
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(46)
    },
    [theme.breakpoints.down('xs')]: {
        width: theme.spacing(40)
    }
}

const titleStyle = {
    alignSelf: 'flex-start'
}
