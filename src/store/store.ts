import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/characterReducer/characterReducer";
import difficultyReducer from "./reducers/difficultyReducer/gameDifficultyReducer";

export const store = configureStore({
    reducer: {
        character: characterReducer,
        gameDifficulty: difficultyReducer
    }
});