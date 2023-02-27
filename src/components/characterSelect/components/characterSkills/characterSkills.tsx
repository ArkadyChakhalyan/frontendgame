import React, { FC } from "react";
import { TCharacterSkillsProps } from "./types";
import { Stack } from "@mui/material";
import { CharacterSkill } from "../characterSkill/characterSkill";
import { CHARACTER_SKILLS_EXTRA_TEXT, INCLUDE_SKILL_LIST } from "./constants";

export const CharacterSkills: FC<TCharacterSkillsProps> = ({
    skills
}) => {
    return (
        <Stack spacing={1}>
            {Object.entries(skills).map(skill => (
                <CharacterSkill
                    key={skill[0]}
                    title={skill[0] + (INCLUDE_SKILL_LIST.includes(skill[0]) ? CHARACTER_SKILLS_EXTRA_TEXT : '')}
                    value={skill[1]}
                />
            ))}
        </Stack>
    );
}