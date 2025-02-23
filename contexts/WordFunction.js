import React, { useReducer } from 'react';
import { wordReducer, initialState } from '../reducers/WordReducer';
import { WordContext } from './WordContext';
import WordGenerator from './WordGenerator';

function SentenceFunction() {
    const [state, dispatch] = useReducer(wordReducer, initialState);

    return (
        <WordContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <h1>React Uygulaması</h1>
                <WordGenerator />
            </div>
        </WordContext.Provider>
    );
}

export default SentenceFunction;