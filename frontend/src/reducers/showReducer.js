const initialState = {
};

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return {...state, [action.payload]: true};
        case 'HIDE':
            return {...state, [action.payload]: false};
        default:
            return state;
    }
};

export default showReducer;