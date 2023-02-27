import { TGameDifficulty } from "../../../../store/reducers/difficultyReducer/types";

export type TDifficultySelectProps = {
    selectedDifficulty: TGameDifficulty;
    onChange: (difficulty: TGameDifficulty) => void;
}