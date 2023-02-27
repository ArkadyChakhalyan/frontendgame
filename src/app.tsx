import React, { useEffect, useState } from 'react';
import { MainLoader } from "./components/mainLoader/mainLoader";
import { CharacterSelect } from "./components/characterSelect/characterSelect";

export const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return (
        <>
            <MainLoader loading={loading} />
            <CharacterSelect />
        </>
    );
}