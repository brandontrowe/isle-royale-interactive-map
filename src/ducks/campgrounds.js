const ADD_CAMPGROUND = "royale/camgrounds/ADD_CAMPGROUND";

export function addCampground(id, name, location, distance) {
    return { type: ADD_CAMPGROUND, id, name, location, distance };
}

const initialState = {};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CAMPGROUND:
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    location: action.location,
                    distance: action.distance
                }
            };
        default:
            return state;
    }
}
