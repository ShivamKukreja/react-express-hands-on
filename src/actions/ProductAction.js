    const getDataAction = (data) => {
    return {
        type: "GET_PRODUCTS",
        payload: data
    }
}
const actions = {
    getAllProducts : () => {
        return (dispatch) => {
            fetch('products.json').then(data => {
                return data.json();
            }).then(response => {
                dispatch(getDataAction(response));            
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
export default actions;