import { IAppState } from "../../../types";
import { TGameDifficulty } from "../types";

export const getGameDifficulty = (
    state: IAppState
): TGameDifficulty => {
    return state?.gameDifficulty || null;
}