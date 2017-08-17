const ADD_CAMPGROUND = "royale/camgrounds/ADD_CAMPGROUND";

export function addCampground(id, name, location) {
    return { type: ADD_CAMPGROUND, id, name, location };
}

const initialState = {};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CAMPGROUND:
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    location: action.location
                }
            };
        default:
            return state;
    }
}
