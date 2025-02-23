import React, { useState, useContext } from 'react';
import { WordContext } from './WordContext';

function WordGenerator() {
  const { state, dispatch } = useContext(WordContext);
  const [verb, setVerb] = useState('');

  const handleVerbChange = (e) => {
    setVerb(e.target.value);
  };

  const handleGenerate = () => {
    dispatch({ type: 'SET_VERB', payload: verb });
    dispatch({ type: 'GENERATE_SENTENCES' });
  };

  return (
    <div>
      <input
        type="text"
        value={verb}
        onChange={handleVerbChange}
        placeholder="Fiil girin"
      />
      <button onClick={handleGenerate}>Cümleleri Oluştur</button>

      <div>
        <h3>Oluşturulan Cümleler</h3>
        <ul>
          {state.sentences.map((sentence, index) => (
            <li key={index}>{sentence.sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WordGenerator;