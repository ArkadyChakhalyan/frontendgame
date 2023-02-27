import { IAppState } from "../../../types";
import { ICharacter } from "../types";

export const getCharacter = (
    state: IAppState
): ICharacter | null => {
    return state?.character || null;
}