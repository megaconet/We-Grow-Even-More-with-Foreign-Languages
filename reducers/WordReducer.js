const initialState = {
    verb: '',
    tense: '',
    sentences: []  // Make sure this is initialized as an empty array
};

function wordReducer(state, action) {
    switch (action.type) {
        case 'SET_VERB':
            return {
                ...state,
                verb: action.payload,
            };
        case 'SET_TENSE':
            return {
                ...state,
                tense: action.payload,
            };
        case 'GENERATE_SENTENCES':
            return {
                ...state,
                sentences: generateSentences(state.verb, state.tense),
            };
        default:
            return state;
    }
}

// Fiilin zaman kiplerine göre cümleler oluşturulması
function generateSentences(verb, tense) {
    const tenses = {
        present: `${verb} now.`,
        past: `${verb} yesterday.`,
        future: `I will ${verb} tomorrow.`,
        // Daha fazla zaman eklenebilir
    };

    return Object.keys(tenses).map(tenseKey => ({
        tense: tenseKey,
        sentence: tenses[tenseKey],
    }));
}

export { initialState, wordReducer };