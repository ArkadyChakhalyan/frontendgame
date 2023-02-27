import React, { FC } from "react";
import { TDifficultySelectProps } from "./types";
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { theme } from "../../../../styles/theme";
import { grey } from "@mui/material/colors";
import { DIFFICULTY_LEVELS, DIFFICULTY_TITLE } from "./constants";
import { TGameDifficulty } from "../../../../store/reducers/difficultyReducer/types";

export const DifficultySelect: FC<TDifficultySelectProps> = ({
    selectedDifficulty,
    onChange
}) => {
    const onDifficultyChange = (
        e: React.MouseEvent<HTMLElement>,
        difficulty: TGameDifficulty
    ) => {
        if (difficulty !== null) {
            onChange(difficulty);
        }
    };

    return (
        <Stack
            spacing={2}
            alignItems={'center'}
            justifyContent={'center'}
            direction={'row'}
        >
            <Typography variant={'subtitle1'} sx={labelStyle}>
                {DIFFICULTY_TITLE}
            </Typography>
            <ToggleButtonGroup
                color={'primary'}
                exclusive
                value={selectedDifficulty}
                onChange={onDifficultyChange}
            >
                {
                    DIFFICULTY_LEVELS.map(difficulty => (
                        <ToggleButton
                            key={difficulty.value}
                            value={difficulty.value}
                            sx={toggleButtonStyle}
                        >
                            {difficulty.name}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Stack>
    );
}


const toggleButtonStyle = {
    minWidth: theme.spacing(12),
    borderColor: grey[600],
    color: grey[100]
}

const labelStyle = {
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}