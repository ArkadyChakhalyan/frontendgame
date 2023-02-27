export type TCharacterState = {
    name: string;
    avatar: string;
    description: string;
    skills: ISkills;
} | null
export interface ICharacter {
    name: string;
    avatar: string;
    description: string;
    skills: ISkills;

}

export interface ISkills { // 1-10
    soft: number;
    technical: number;
    stamina: number;
}