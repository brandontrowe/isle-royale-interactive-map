const ADD_POINT_A = "royale/quickReference/ADD_POINT_A";
const ADD_POINT_B = "royale/quickReference/ADD_POINT_B";
const RESET = "royale/quickReference/RESET";

export function addPointA(id) {
    return { type: ADD_POINT_A, id };
}

export function addPointB(id) {
    return { type: ADD_POINT_B, id };
}

export function reset() {
    return { type: RESET };
}

const initialState = {
    pointA: null,
    pointB: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POINT_A:
            return {
                ...state,
                pointA: action.id
            };
        case ADD_POINT_B:
            return {
                ...state,
                pointB: action.id
            };
        case RESET:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
