let cachedData = [];

const getDataAction = (data) => {
    return {
        type: "GET_PRODUCTS",
        payload: data
    }
}
const findDataAction = (data) => {
    return {
        type: "FIND_PRODUCTS",
        payload: data
    }
}
const actions = {
    getAllProducts: () => {
        return (dispatch) => {
            fetch('products.json').then(data => {
                return data.json();
            }).then(response => {
                cachedData = response;
                dispatch(getDataAction(cachedData));
            }).catch(error => {
                console.log(error);
            })
        }
    },
    findProducts: (keyword) => {
        /* let products = [...cachedData.products];
        if (keyword) {
            let products = products.filter(product => {
                return (product.name.indexOf(keyword) >= 0);
            });            
        } */
        return(dispatch) => {
            /* dispatch(findDataAction({
                products: products
            })); */
            dispatch(findDataAction({
                keyword: keyword
            }));
        }
    }
}
export default actions;