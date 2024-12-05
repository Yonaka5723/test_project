import React, { useState } from 'react';
 
const InputForm = () => {
    const [word, setWord] = useState('初始文字');
    return (
        <>
            <input
                type="text"
                defaultValue={word}
                onChange={e => {
                    setWord(e.target.value);
                }}
            />
            <div>word的值:{word}</div>
        </>
    );
};
export default InputForm;