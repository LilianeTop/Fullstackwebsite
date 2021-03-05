export default (state, action) => {
    switch (action.type) {
        case "show":
            return {
                showing: action.payload
            };
        default:
            return state;
    }
};