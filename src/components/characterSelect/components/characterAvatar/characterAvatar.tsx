import { FC } from "react";
import { TCharacterAvatarProps } from "./types";
import { Avatar, Button, IconButton } from "@mui/material";
import { theme } from "../../../../styles/theme";
import { grey } from "@mui/material/colors";

export const CharacterAvatar: FC<TCharacterAvatarProps> = ({
    avatar,
    name,
    selected,
    onClick
}) => {
    return (
        <IconButton onClick={onClick}>
            <Avatar
                sx={{ ...style, ...(selected && selectedStyle) }}
                alt={name}
                src={avatar}
            />
        </IconButton>
    );
}

const style = {
    width: theme.spacing(14),
    height: theme.spacing(14),
    transition: `all 0.3s`,
    border: `1px solid ${grey[500]}`,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(11),
        height: theme.spacing(11),
    },
    [theme.breakpoints.down('xs')]: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
}

const selectedStyle = {
    boxShadow: `0 0 ${theme.spacing()} ${theme.spacing(0.5)} ${theme.palette.primary.main}`,
    width: theme.spacing(18),
    height: theme.spacing(18),
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    [theme.breakpoints.down('xs')]: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    }
}