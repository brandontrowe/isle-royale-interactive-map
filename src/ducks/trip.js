const SET_LENGTH = "royale/trip/SET_LENGTH";

export function setTripLength(len) {
    return { type: SET_LENGTH, len };
}

const initialState = {};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LENGTH:
            return {
                ...state,
                length: action.len
            };
        default:
            return state;
    }
}

// export function epic
