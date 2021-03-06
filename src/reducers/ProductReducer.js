let initialState = {
    products: [],
    keyword: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
        case 'FIND_PRODUCTS':
            return Object.assign({}, state, action.payload);
            //return {...state, action.payload};
        default:
            return state;
    }
}
export default reducer;