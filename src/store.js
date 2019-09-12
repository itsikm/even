
// Action types
// ----------------------------------------------------------------------------
export const SEARCH = "EVEN.SEARCH";


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
    results: null
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH: {
            console.log('action.payload', action.payload);
            return {
                ...state,
                results: action.payload
            }
        }

        default:
            return state;
    }
}

// Action creators
// ----------------------------------------------------------------------------

export function search(results) {
    return { type: SEARCH, payload: results };
}
