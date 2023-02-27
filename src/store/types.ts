import { store } from "./store";
import { TCharacterState } from "./reducers/characterReducer/types";
import { TGameDifficultyState } from "./reducers/difficultyReducer/types";

export interface IAppState {
    character?: TCharacterState;
    gameDifficulty?: TGameDifficultyState;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch