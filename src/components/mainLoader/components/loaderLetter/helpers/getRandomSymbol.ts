const CHARS = '@<>-_\\/[]{}—=+*^?#_________';
export const getRandomSymbol = () => {
    return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
}