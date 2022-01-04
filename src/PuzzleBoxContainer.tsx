import React, {useEffect, useState} from 'react';
import './PuzzleBoxContainer.css';
import randomWords from 'random-words';
import Box from './Box';
import {shuffleArray} from './Utils';

function PuzzleBoxContainer() {
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        setCharacters(shuffleArray(randomWords().split('')));
    }, []);

    const boxes = characters.map((c, i) => <Box key={`${c}${i}`} character={c} />);
    return (
        <div className='puzzle-box-container'>{boxes}</div>
    );
}

export default PuzzleBoxContainer;
