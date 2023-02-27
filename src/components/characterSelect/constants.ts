//@ts-ignore
import character1Avatar from '../../media/character_1.png';
//@ts-ignore
import character2Avatar from '../../media/character_2.png'
//@ts-ignore
import character3Avatar from '../../media/character_3.png'
import { ICharacter } from "../../store/reducers/characterReducer/types";
export const CHARACTERS: ICharacter[] = [
    {
        name: 'Julia',
        description: 'character 1 descr iption char acter 1 descrip tion character 1 descr iption chara cter 1 desc ription character 1 description character 1 description character 1 description',
        avatar: character1Avatar,
        skills: {
            soft: 3,
            technical: 2,
            stamina: 1
        }
    },
    {
        name: 'Anthony',
        description: 'character 3 description character 2 descri ption char acter 2 des crip tion character 2 description character 2 description character 2 description',
        avatar: character3Avatar,
        skills: {
            soft: 2,
            technical: 2,
            stamina: 2
        }
    },
    {
        name: 'David',
        description: 'character 2 descrip tion char acter 2 des cription character 2 descri ption chara cter 2 d escri pti on character 2 description character 2 description',
        avatar: character2Avatar,
        skills: {
            soft: 1,
            technical: 3,
            stamina: 2
        }
    }
];

export const CHARACTER_SELECT_TITLE = 'Select your character';
export const CHARACTER_SELECT_START_BUTTON = 'Start';