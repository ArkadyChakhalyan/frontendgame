import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGameDifficulty, TGameDifficultyState } from "./types";

const initialState: TGameDifficultyState = null as TGameDifficulty;

export const gameDifficultySlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        difficultySetAC: (state, action: PayloadAction<TGameDifficulty>) => {
            return action.payload;
        },
    },
});

export const {
    difficultySetAC
} = gameDifficultySlice.actions;

export default gameDifficultySlice.reducer;