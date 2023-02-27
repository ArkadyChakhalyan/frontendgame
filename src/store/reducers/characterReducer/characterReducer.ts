import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter, TCharacterState } from "./types";

const initialState: TCharacterState = null as TCharacterState;

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        characterSetAC: (state, action: PayloadAction<ICharacter>) => {
            return action.payload;
        },
    },
});

export const {
    characterSetAC
} = characterSlice.actions;

export default characterSlice.reducer;