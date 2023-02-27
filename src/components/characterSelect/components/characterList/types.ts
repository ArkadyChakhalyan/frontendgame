import { ICharacter } from "../../../../store/reducers/characterReducer/types";


export type TCharacterListProps = {
    selectedCharacter: ICharacter;
    onSelect: (character: ICharacter) => void;
}